import 'package:flutter/material.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';

class QRScannerPage extends StatefulWidget {
  @override
  _QRScannerPageState createState() => _QRScannerPageState();
}

class _QRScannerPageState extends State<QRScannerPage> {
  final GlobalKey qrKey = GlobalKey(debugLabel: 'QR');
  late QRViewController qrController;

  @override
  void dispose() {
    qrController.dispose();
    super.dispose();
  }

  void _onQRViewCreated(QRViewController controller) {
  setState(() {
    qrController = controller;
  });
  controller.scannedDataStream.listen((barcode) async {
    // Show a dialog to inform the user that the QR code has been scanned
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('QR Code Scanned'),
          content: Text('The QR code has been scanned.'),
          actions: [
            TextButton(
              child: Text('OK'),
              onPressed: () {
                Navigator.of(context).pop(); 
              },
            ),
          ],
        );
      },
    );
  });
}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('QR Scanner'),
      ),
      body: Container(
        child: QRView(
          key: qrKey,
          onQRViewCreated: _onQRViewCreated,
        ),
      ),
    );
  }
}
