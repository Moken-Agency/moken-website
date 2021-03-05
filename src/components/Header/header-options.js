export default {
  leftMenu: [
    {
      title: "Access network",
      withDivider: true,
      link: 'https://network.mokenstartups.com'
    },
    {
      title: "Partners",
      route: "/our-partners",
      withDivider: true,
    },
    {
      title: "Insights",
      withDivider: true,
      link: 'https://medium.com/insights'
    },
    {
      title: "Careers",
      route: "/careers",
    },
  ],
  rightMenu: [
    {
      title: "STARTUPSMART PODCAST",
      route: "/academy",
      withDivider: true,
    },
    {
      title: "Shop moken",
      route: "/shop-moken",
      withDivider: true,
      isComingSoon: true
    },
    {
      title: "Work with us",
      route: "/connect-with-us",
    },
  ],
  mainMenu: [
    {
      title: "About",
      dividerColor: "#000",
      hoverColor: 'rgba(0,0,0,.30)',
      subRouts: [
        {
          title: "ABOUT MOKEN",
          route: "/about-moken",
        },
        {
          title: "PEOPLE & LEADERSHIP",
          route: "/people-leadership",
        },
        // {
        //   title: "CLIENT RESULTS",
        //   route: "/",
        // },
        {
          title: 'Our Vision',
          route: '/our-vision'
        },
        {
          title: "OUR PARTNERS",
          route: "/our-partners",
        },
        {
          title: "PORTFOLIO",
          route: "/portfolio",
        },
      ],
    },
    {
      title: "community",
      route: "community",
      dividerColor: "#ff2a68",
      subRouts: [
        {
          title: "ABOUT THE COMMUNITY",
          route: "/community",
        },
        {
          title: "FOR STARTUPS",
          route: "/for-startups",
        },
        {
          title: "FOR INVESTORS",
          route: "/for-investors",
        },
        {
          title: "FOR STUDENTS",
          route: "/for-students",
        },
        // {
        //   title: "FOR BRANDS",
        //   route: "/for-brands",
        // },
        {
          title: "FOR FOUNDERS",
          route: '/for-founders'
        },  {
          title: "FOR STARTUP PROGRAMS",
          route: '/for-startup-programs'
        },
      ],
    },
    {
      title: "agency",
      dividerColor: "#ffc4af",
      subRouts: [
        {
          title: "About Agency",
          route: "/about-agency",
        },
        {
          title: "Expertise",
          route: "/expertise",
        },
        {
          title: "SPRINTS & ROADMAPS",
          isComingSoon: true
        },
        {
          title: "STARTUPSMART PACKAGES",
          route: "/start-up-smart-packages",
        },
        {
          title: "PRODUCT TESTING TEAM",
          route: "/product-testing-team",
        },
      ],
    },
    {
      title: "Programs",
      dividerColor: "#00c39f",
      isComingSoon: true,
      // subRouts: [
      //   {
      //     title: "ABOUT PROGRAMS",
      //     route: "/about-programs",
      //   },
      //   {
      //     title: "MOKENLABS",
      //     route: "/moken-labs",
      //   },
      //   {
      //     title: "FUTURE FOUNDERS PROGRAM",
      //     route: "/future-founders",
      //   },
      //   {
      //     title: "RAISING RIGHT PROGRAM",
      //     route: "/raising-right",
      //   },
      //   {
      //     title: "ADVISORS OF TOMORROW PROGRAM",
      //     route: "/advertise-wth-us",
      //   },
      // ],
    },
    {
      title: "Events",
      dividerColor: "#263da8",
      subRouts: [
        {
          title: 'EVENTS',
          route: '/events'
        },
        {
          title: "UPCOMING EVENTS",
          route: "/upcoming-events",
        },
        {
          title: "HOST AN EVENT",
          route: "/host-an-event",
        },
        {
          title: "GET TICKETS",
        },
      ],
    },
    {
      title: "Access",
      route: "/access",
      dividerColor: "#ff7d3e",
      subRouts: [
        {
          title: "ABOUT ACCESS",
          route: '/access'
        },
        {
          title: "ACCESS NETWORK",
          link: 'https://network.mokenstartups.com'
        },
      ],
    }
    // {
    //   title: "Media",
    //   route: "media",
    //   dividerColor: "#ff7d3e",

  ],
  mainMenuTextStyles: {
    letterSpacing: '.2vw',
  },
  topMenuTextStyles: {
    // margin: '0 1.5vw',
    letterSpacing: '.18vw'
  },
};
