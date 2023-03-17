import 'package:digibinn_app/login.dart';
import 'package:digibinn_app/register.dart';
import 'package:flutter/material.dart';

import 'main.dart';

class StartPage extends StatefulWidget {
  @override
  _StartPageState createState() => _StartPageState();
}

class _StartPageState extends State<StartPage> {
  @override
  void initState() {
    super.initState();
    // Navigate to the next page after 5 seconds
    Future.delayed(Duration(seconds: 5), () {
      Navigator.pushReplacement(
          context, MaterialPageRoute(builder: (context) => MyLogin ()));
    });
  }

  @override
  Widget build(BuildContext context) {
    double baseWidth = 393;
    double fem = MediaQuery.of(context).size.width / baseWidth;
    double ffem = fem * 0.97;
    return Container(
      width: double.infinity,
      child: Container(
        // openningscreen7Gt (1:419)
        padding:
            EdgeInsets.fromLTRB(65.5 * fem, 163 * fem, 32.5 * fem, 62 * fem),
        width: double.infinity,
        height: 852 * fem,
        decoration: const BoxDecoration(
            gradient: LinearGradient(
          begin: Alignment.topRight,
          end: Alignment.bottomLeft,
          colors: [
            Colors.blue,
            Colors.red,
          ],
        )),
        child: Container(
          // group80BAG (1:421)
          padding: EdgeInsets.fromLTRB(0 * fem, 0 * fem, 0 * fem, 1.06 * fem),
          width: double.infinity,
          height: double.infinity,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Center(
                // weprovidethebestgarbagecollect (1:433)
                child: Container(
                  margin:
                      EdgeInsets.fromLTRB(0 * fem, 0 * fem, 26 * fem, 32 * fem),
                  constraints: BoxConstraints(
                    maxWidth: 258 * fem,
                  ),
                  child: Text(
                    'We provide the best garbage collection service for your company or residence!',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: 'Poppins-Bold.ttf',
                      fontSize: 20 * ffem,
                      fontWeight: FontWeight.w300,
                      height: 1.6 * ffem / fem,
                      color: Color(0xffffffff),
                      decoration: TextDecoration.none,
                    ),
                  ),
                ),
              ),
              Container(
                // digibinn3Lt (1:422)
                margin: EdgeInsets.fromLTRB(0 * fem, 0 * fem, 0 * fem, 6 * fem),
                child: RichText(
                  textAlign: TextAlign.center,
                  text: TextSpan(
                    style: TextStyle(
                      fontFamily: "Poppins-Bold.ttf",
                      fontSize: 100 * ffem,
                      fontWeight: FontWeight.w700,
                      height: 2 * ffem / fem,
                      letterSpacing: -4 * fem,
                      color: Color(0xffffffff),
                    ),
                    children: [
                      TextSpan(
                        text: 'Digibinn',
                        style: TextStyle(
                          fontFamily: 'Poppins',
                          fontSize: 70 * ffem,
                          fontWeight: FontWeight.w700,
                          height: 2.8571428571 * ffem / fem,
                          letterSpacing: -4 * fem,
                          color: Color(0xffffffff),
                        ),
                      ),
                      TextSpan(
                        text: '.',
                      ),
                    ],
                  ),
                ),
              ),

              
              // Container(
              //   // autogroup1g8wgHN (9K2rZWYDWe9ukQymR91g8w)
              //   margin: EdgeInsets.fromLTRB(
              //       43.5 * fem, 0 * fem, 81.5 * fem, 188 * fem),
              //   width: double.infinity,
              //   height: 56 * fem,
              //   decoration: BoxDecoration(
              //     color: Color(0xffffffff),
              //     borderRadius: BorderRadius.circular(62 * fem),
              //   ),
              //   child: Center(
              //     child: Text(
              //       'Get Started',
              //       style: TextStyle(
              //         fontFamily: "Poppins-Bold.ttf",
              //         fontSize: 16 * ffem,
              //         fontWeight: FontWeight.w700,
              //         height: 1.185 * ffem / fem,
              //         color: Color(0xff1e1e1d),
              //       ),
              //     ),
              //   ),
              // ),
              // Container(
              //   // brandsthattrustsusijr (1:425)
              //   margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 42*fem, 10.5*fem),
              //   child: Text(
              //     'Brands that trusts us',
              //     textAlign: TextAlign.center,
              //     style: TextStyle (
              //       fontFamily: "Poppins-Bold.ttf",
              //       fontSize: 18*ffem,
              //       fontWeight: FontWeight.w700,
              //       height: 1.185*ffem/fem,
              //       color: Color(0xff79797a),
              //     ),
              //   ),
              // ),
              // Container(
              //   // autogroupxc7hcqE (9K2rhLeWBmz5XDqSCHXC7H)
              //   margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 42.94*fem, 0*fem),
              //   child: Row(
              //     crossAxisAlignment: CrossAxisAlignment.center,
              //     children: [
              //       Container(
              //         // companylogocye (1:431)
              //         margin: EdgeInsets.fromLTRB(0*fem, 1.08*fem, 12.53*fem, 0*fem),
              //         width: 45.47*fem,
              //         height: 12.25*fem,
              //         child: Image.asset(
              //           'assets/page-1/images/company-logo-LcY.png',
              //           width: 45.47*fem,
              //           height: 12.25*fem,
              //         ),
              //       ),
              //       Container(
              //         // companylogokiU (1:428)
              //         margin: EdgeInsets.fromLTRB(0*fem, 3.26*fem, 13*fem, 0*fem),
              //         width: 45*fem,
              //         height: 12.18*fem,
              //         child: Image.asset(
              //           'assets/page-1/images/company-logo.png',
              //           width: 45*fem,
              //           height: 12.18*fem,
              //         ),
              //       ),
              //       Container(
              //         // companylogoUPa (1:426)
              //         margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 13.11*fem, 0.66*fem),
              //         width: 45.89*fem,
              //         height: 11.25*fem,
              //         child: Image.asset(
              //           'assets/page-1/images/company-logo-rPr.png',
              //           width: 45.89*fem,
              //           height: 11.25*fem,
              //         ),
              //       ),
              //       Container(
              //         // companylogoNzk (1:427)
              //         margin: EdgeInsets.fromLTRB(0*fem, 0*fem, 0*fem, 0.44*fem),
              //         width: 46.06*fem,
              //         height: 15*fem,
              //         child: Image.asset(
              //           'assets/page-1/images/company-logo-5XE.png',
              //           width: 46.06*fem,
              //           height: 15*fem,
              //         ),
              //       ),
              //     ],
              //   ),
              // ),
            ],
          ),
        ),
      ),
    );
  }
}
