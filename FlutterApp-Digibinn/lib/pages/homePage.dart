import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import '../widgets/navigationDrawer.dart';
import 'package:location/location.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';


Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  static final String title = 'Home Page';

  @override
  Widget build(BuildContext context) => MaterialApp(
        debugShowCheckedModeBanner: false,
        title: title,
        theme: ThemeData(primarySwatch: Colors.blue),
        home: MainPage(),
      );
}

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  double progress = 0.0;
   @override
  void initState() {
    super.initState();
    loadData();
  }

   Future<void> loadData() async {
    final url =
        'https://api.thingspeak.com/channels/2071785/fields/2/last.json';
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      final currentValue = double.tryParse(data['field2'] ?? '') ?? 0.0;
      setState(() {
        progress = currentValue / 100.0;
      });
    }
  }


  Location _location = Location();
  bool _trackingLocation = false;

  @override
  Widget build(BuildContext context) => Scaffold(
        drawer: NavigationDrawerWidget(),
        appBar: AppBar(
          title: Text(MyApp.title),
          centerTitle: true,
        ),
        body: SingleChildScrollView(
        child: Container(
            height: MediaQuery.of(context).size.height / 2,
            width: double.infinity,
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Filled Percentage',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 10),
                Container(
                  height: 200,
                  width: 500,
                  child: PageView.builder(
                    itemCount: 1,
                    itemBuilder: (context, index) {
                      return Container(
                        margin: EdgeInsets.symmetric(horizontal: 8),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: Colors.grey),
                        ),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            CircularProgressIndicator(
                              value: progress,
                              backgroundColor: Colors.grey[300],
                              strokeWidth: 15,
                            ),
                            SizedBox(height: 16),
                            Text('${(progress * 100).round()}%'),
                          ],
                        ),
                      );
                    },
                  ),
                ),
                SizedBox(height: 20),
                Text(
                  'Bin Location',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 10),
                Expanded(
                  child: Column(
                    children: [
                      Container(
                        height: 500,
                        width: 500,
                        margin: EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.grey),
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(16),
                          child: InAppWebView(
                            initialUrlRequest: URLRequest(
                              url: Uri.parse('https://goo.gl/maps/SXmJWBm1T5mB22qx8'),
                            ),
                            initialOptions: InAppWebViewGroupOptions(
                              crossPlatform: InAppWebViewOptions(
                                javaScriptEnabled: true,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

        ),
      );

}
