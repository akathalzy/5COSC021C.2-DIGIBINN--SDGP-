import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class DashBoard extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) => Scaffold(
        //drawer: NavigationDrawerWidget(),
        backgroundColor: Color.fromARGB(136, 196, 182, 182),
        appBar: AppBar(
          title: Text('DashBoard'),
          centerTitle: true,
          backgroundColor: Colors.green,
        ),
        body: Column(
          children: [
            Padding(padding: EdgeInsets.only(top: 20)),
            Text(
              'Weight',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 18,
              ),
            ),
            Padding(
              padding: EdgeInsets.only(top: 36.0),
              child: SizedBox(
                width: 450,
                height: 200,
                child: InAppWebView(
                    initialUrlRequest: URLRequest(
                      url: Uri.parse(
                        'https://thingspeak.com/channels/2071785/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15',
                      ),
                    ),
                    initialOptions: InAppWebViewGroupOptions(
                      crossPlatform: InAppWebViewOptions(
                        javaScriptEnabled: true,
                      ),
                    ),
                ),
              ),
            ),
            Padding(padding: EdgeInsets.only(top: 20)),
            Text(
              'Distance',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 18,
              ),
            ),
            Padding(
              padding: EdgeInsets.only(top: 36.0),
              child: SizedBox(
                width: 450,
                height: 200,
                child: InAppWebView(
                  initialUrlRequest: URLRequest(
                    url: Uri.parse(
                      'https://thingspeak.com/channels/2071785/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15',
                    ),
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
      );
}
