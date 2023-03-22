import { dashboard, locatebin, bin, schedule, qr, troubleshoot, settings, facebook, instagram, linkedin, twitter  } from "../assets";


export const navLinks = [
  {
    id: "login",
    title: "Login",
    link: 'Login'
  },
  {
    id: "register",
    title: "Register",
    link: 'Register'
  },
  {
    id: "support",
    title: "Support",
    link: 'Support'
  },
  {
    id: "aboutdigibinn",
    title: "About",
    link: 'About'
  },
  
];

export const sidebarLinks = [
  {
    id: "userdashboard",
    icon: dashboard,
    title: "Dashboard",
    link: '../userdashboard'
  },
  {
    id: "userlocatebin",
    icon: locatebin,
    title: "Locate bin",
    link: '../userlocatebin'
  },
  {
    id: "userrequestremovebin",
    icon: bin,
    title: "Request/Remove bin",
    link: '../userrequestremovebin'
  },
  {
    id: "userpickupschedule",
    icon: schedule,
    title: "Pickup Schedule",
    link: '../userpickupschedule'
  },
  {
    id: "userscanQR",
    icon: qr,
    title: "Scan QR",
    link: '../userscanQR'
  },
  {
    id: "usertroubleshootsensors",
    icon: troubleshoot,
    title: "Troubleshoot sensors",
    link: '../usertroubleshoot'
  },
  {
    id: "usersettings",
    icon: settings,
    title: "Settings",
    link: '../usersettings'
  },
  
];
  

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];


