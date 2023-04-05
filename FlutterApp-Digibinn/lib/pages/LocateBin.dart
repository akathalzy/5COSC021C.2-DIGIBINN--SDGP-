import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';


class BinLocation extends StatelessWidget {
  final LatLng binLocation = LatLng(6.795790, 79.943533);

  @override
  Widget build(BuildContext context) => Scaffold(
    //drawer: NavigationDrawerWidget(),
    appBar: AppBar(
      title: Text('Locate Bin'),
      centerTitle: true,
      backgroundColor: Colors.green,
    ),
    body: GoogleMap(
      initialCameraPosition: CameraPosition(
        target: binLocation,
        zoom: 15,
      ),
      markers: {
        Marker(
          markerId: MarkerId('bin'),
          position: binLocation,
          infoWindow: InfoWindow(
            title: 'Bin Location',
          ),
        ),
      },
    ),
  );
}