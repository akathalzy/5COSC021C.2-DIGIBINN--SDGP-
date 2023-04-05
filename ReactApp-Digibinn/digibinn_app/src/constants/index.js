import { dashboard, locatebin, bin, schedule, qr, troubleshoot, settings, facebook, instagram, linkedin, twitter, hasitha, thalal, nithursiga, kemila  } from "../assets";


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
    id: "usernotification",
    icon: bin,
    title: "User Notification",
    link: '../usernotification'
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

export const teamMembers = [
  {
    name: 'Hasitha Wimalasooriya',
    role: 'Software Engineer',
    description: 'Hasitha is a software engineer with expertise in web development and data analytics. He has experience working with both startups and established companies, and is passionate about using technology to solve complex problems.',
    image: hasitha,
  },
  {
    name: 'Thalal Izzath',
    role: 'Marketing Professional',
    description: 'Thalal is a marketing professional with a creative flair and a strategic mindset. He has worked with a range of brands across multiple industries, and is skilled in developing innovative marketing campaigns that connect with audiences.',
    image: thalal,
  },
  {
    name: 'Kemila Dabare',
    role: 'Graphic Designer',
    description: 'Kemila is a graphic designer with a passion for visual storytelling. She specializes in creating designs that are not only aesthetically pleasing, but also communicate a powerful message.',
    image: kemila,
  },
  {
    name: 'Nithursiga Ramesh',
    role: 'Social Media Strategist',
    description: 'Nithursiga is a social media strategist with a deep understanding of digital platforms and their potential for social impact. She has experience working with nonprofit organizations and advocacy groups to amplify their message and reach new audiences.',
    image: nithursiga,
  },
];

