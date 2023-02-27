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
    link: 'UserDashboard'
  },
  {
    id: "userlocatebin",
    icon: locatebin,
    title: "Locate bin",
    link: 'userlocatebin'
  },
  {
    id: "userrequest/removebin",
    icon: bin,
    title: "Request/Remove bin",
    link: 'userrequest/removebin'
  },
  {
    id: "userpickupschedule",
    icon: schedule,
    title: "Pickup Schedule",
    link: 'userpickupschedule'
  },
  {
    id: "userscanQR",
    icon: qr,
    title: "Scan QR",
    link: 'userscanQR'
  },
  {
    id: "usertroubleshootsensors",
    icon: troubleshoot,
    title: "Troubleshoot sensors",
    link: 'usertroubleshootsensors'
  },
  {
    id: "usersettings",
    icon: settings,
    title: "Settings",
    link: 'usersettings'
  },
  
];


export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
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
