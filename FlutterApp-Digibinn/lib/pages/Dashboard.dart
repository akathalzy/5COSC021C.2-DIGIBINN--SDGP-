import 'package:flutter/material.dart';

class DashBoard extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Scaffold(
        //drawer: NavigationDrawerWidget(),
        appBar: AppBar(
          title: Text('DashBoard'),
          centerTitle: true,
          backgroundColor: Colors.green,
        ),
      );
}