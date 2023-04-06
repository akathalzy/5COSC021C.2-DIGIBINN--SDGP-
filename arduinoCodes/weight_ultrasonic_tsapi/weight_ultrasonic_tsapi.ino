#include <SoftwareSerial.h>
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include "HX711.h"
#include <ESP8266WiFi.h>
#include <ThingSpeak.h>
#include <WiFiManager.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// Declaration for SSD1306 display connected using I2C
#define OLED_RESET     -1 // Reset pin
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// Declaration of the HCR-04 ultrasonic sensor pins
#define TRIGGER_PIN 14
#define ECHO_PIN 12
const int maxDepth = 20;

// Declaration of the HCX-711 weight sensor pins
#define LOADCELL_DOUT_PIN 0
#define LOADCELL_SCK_PIN 2
HX711 scale;

// Initialize your WiFi network credentials
// const char* ssid = "Basic";
// const char* password = "87654421";

// Initialize your ThingSpeak channel settings
unsigned long channelID = 2071785;
const char* apiKey = "I9A5OM434OQ41AKJ";
WiFiClient client;

void setup() {
  Serial.begin(9600);

    // initialize the OLED object
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { 
    Serial.println(F("SSD1306 allocation failed"));
    for(;;); // Don't proceed, loop forever
  }
  display.clearDisplay();
  display.setTextColor(WHITE);
  display.setTextSize(1);
  delay(2000);

// Create an instance of the WiFiManager library
  WiFiManager wifiManager;

  // Uncomment the following line to reset the saved Wi-Fi configuration
  // wifiManager.resetSettings();

  // Start the Wi-Fi manager and connect to the saved network if available
  if (!wifiManager.autoConnect()) {
    Serial.println("Failed to connect to Wi-Fi.");
    // Reset the board if we failed to connect to Wi-Fi
    ESP.reset();
  }

  // Print the board's IP address
  Serial.println("Connected to Wi-Fi.");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP()); 

  pinMode(TRIGGER_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);


  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  scale.set_scale();
  scale.tare(-55763/950);  

  // Initialize ThingSpeak
  ThingSpeak.begin(client);
}

void loop() {

  long duration, distance;
  int filledLvl, filledPer;
  digitalWrite(TRIGGER_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIGGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER_PIN, LOW);
  duration = pulseIn(ECHO_PIN, HIGH);
  distance = duration * (0.034/2);

  filledLvl = maxDepth-distance;
  filledPer = (100*filledLvl)/maxDepth;  

  display.clearDisplay();
  display.setCursor(0, 25);

  if (distance>20 or distance<0) {
    display.print("Please close the lid properly");
    filledPer = 0;
  }
  else {
  display.print("Filled lvl ");
  display.print(filledPer);
  display.print(" %");    
  }
  display.display();

  Serial.print("Filled lvl ");
  Serial.print(filledPer);
  Serial.println(" %");

  float weight = scale.get_units(20);

  Serial.print("Weight: ");
  if (weight<0) {
    Serial.print("0 g");
    weight = 0;
  }
  else {
  Serial.print(weight, 2);
  Serial.println(" g");
  }
  
  // Send data to ThingSpeak
  ThingSpeak.setField(1, weight);
  ThingSpeak.setField(2, filledPer);

  int code = ThingSpeak.writeFields(channelID, apiKey);

    if(code == 200){
      Serial.println("Channel update successful.");
    }
    else{
      Serial.println("Problem updating channel. HTTP error code " + String(code));
    }

  delay(2000);
}
