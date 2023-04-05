import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class BinLocation extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Locate Bin'),
        centerTitle: true,
        backgroundColor: Colors.green,
      ),
      body: InAppWebView(
        initialUrlRequest: URLRequest(
          url: Uri.parse('https://goo.gl/maps/SXmJWBm1T5mB22qx8'),
        ),
        initialOptions: InAppWebViewGroupOptions(
          crossPlatform: InAppWebViewOptions(
            javaScriptEnabled: true,
          ),
        ),
      ),
    );
  }
}




 // body: GoogleMap(
    //   initialCameraPosition: CameraPosition(
    //     target: binLocation,
    //     zoom: 15,
    //   ),
    //   markers: {
    //     Marker(
    //       markerId: MarkerId('bin'),
    //       position: binLocation,
    //       infoWindow: InfoWindow(
    //         title: 'Bin Location',
    //       ),
    //     ),
    //   },
    // ),