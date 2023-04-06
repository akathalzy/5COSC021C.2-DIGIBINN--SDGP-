#include <SoftwareSerial.h>
#include <Adafruit_GPS.h>
#include <Wire.h>
#include <Adafruit_SSD1306.h>
#include "HX711.h"

#define OLED_ADDR 0x3C
#define OLED_SDA D1
#define OLED_SCL D2
Adafruit_SSD1306 display(128, 64, &Wire, OLED_ADDR);

#define GPS_RX_PIN 13
#define GPS_TX_PIN 15
SoftwareSerial gpsSerial(GPS_RX_PIN, GPS_TX_PIN);
Adafruit_GPS gps(&gpsSerial);

#define TRIGGER_PIN 14
#define ECHO_PIN 12

#define LOADCELL_DOUT_PIN 0
#define LOADCELL_SCK_PIN 2
HX711 scale;

void setup() {
  Serial.begin(9600);
  gpsSerial.begin(9600);

  display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR);
  display.clearDisplay();
  display.setTextColor(WHITE);
  display.setTextSize(2);
  delay(2000);

  gps.begin(9600);
  gps.sendCommand(PMTK_SET_NMEA_OUTPUT_RMCGGA);
  gps.sendCommand(PMTK_SET_NMEA_UPDATE_1HZ);
  gps.sendCommand(PGCMD_ANTENNA);

  pinMode(TRIGGER_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  scale.set_scale();
  scale.tare();
}

void loop() {
  while (!gpsSerial.available());
  gps.read();

  if (gps.newNMEAreceived()) {
    if (!gps.parse(gps.lastNMEA())) {
      return;
    }
  }

  if (gps.fix) {
    float lat = gps.latitudeDegrees;
    float lon = gps.longitudeDegrees;
    Serial.print("Latitude: ");
    Serial.println(lat, 6);
    Serial.print("Longitude: ");
    Serial.println(lon, 6);

    display.clearDisplay();
    display.setCursor(0, 0);
    display.print("Lat: ");
    display.println(lat, 6);
    display.print("Lng: ");
    display.println(lon, 6);
    display.display();
  }

  long duration, distance;
  digitalWrite(TRIGGER_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIGGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER_PIN, LOW);
  duration = pulseIn(ECHO_PIN, HIGH);
  distance = (duration/2) / 29.1;

  display.clearDisplay();
  display.setCursor(0, 25);
  display.print("Distance: ");
  display.print(distance);
  display.print(" cm");
  display.display();

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  float weight = scale.get_units(10);

  Serial.print("Weight: ");
  Serial.print(weight, 2);
  Serial.println(" g");

  delay(1000);
}
