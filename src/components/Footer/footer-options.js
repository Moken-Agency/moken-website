import {
  instagram,
  twitter,
  dribbble,
  behance,
  linkedin,
  instagramWhite,
  behanceWhite,
  dribbbleWhite,
  linkedinWhite,
  twitterWhite,
} from "../../images/socials";

export default {
  menuOption: {
    menuColumns: [
      {
        title: "The Company",
        routes: [
          {
            title: "About Moken",
            route: "/about-moken",
          },
          {
            title: "The Agency",
            route: "/about-agency",
          },
          {
            title: "Our Partners",
            route: "/our-partners",
          },
          {
            title: "Access Network",
            route: "/access",
          },
          {
            title: "Careers",
            route: "/careers",
          },
          {
            title: "Insights",
            link: 'https://medium.com/insights'
          },
        ],
      },
      {
        title: "Help & Support",
        routes: [
          {
            title: "FAQ",
            route: "/faqs",
          },
          {
            title: "Connect with Us",
            route: "/connect-with-us",
          },
          {
            title: "Privacy",
            route: "/privacy",
          },
          {
            title: "Terms",
            route: "/terms",
          },
        ],
      },
      {
        title: "Collaborate",
        routes: [
          {
            title: "Become a Partner",
            route: "/partnership-programs",
          },
          {
            title: "Sponsor the Future",
            route: "/advertise-with-us",
          },
          {
            title: "Work with Mo + Ken",
            route: "/mo-ken",
          },
          {
            title: "Product Testing Team",
            route: "/product-testing-team",
          },
          {
            title: "Educate the Next Generation",
            route: "/mentorship",
          },
          {
            title: "Innovation Week",
            route: "/innovation-week",
          },
        ],
      },
    ],
  },
  socialsMedia: [
    { image: twitter, link: "https://www.twitter.com/mokenstartups" },
    { image: behance, link: "https://www.behance.net/mokenagency" },
    { image: instagram, link: "https://www.instagram.com/mokenstartups" },
    { image: linkedin, link: "https://www.linkedin.com/company/mokenstartups" },
    { image: dribbble, link: "https://dribbble.com/mokenagency" },
  ],
  socialsMediaWhite: [
    { image: twitterWhite, link: "https://www.twitter.com/mokenstartups" },
    { image: behanceWhite, link: "https://www.behance.net/mokenagency" },
    { image: instagramWhite, link: "https://www.instagram.com/mokenstartups" },
    {
      image: linkedinWhite,
      link: "https://www.linkedin.com/company/mokenstartups",
    },
    { image: dribbbleWhite, link: "https://dribbble.com/mokenagency" },
  ],

  styles: {
    joinFirstText: {
      display: "block",
      marginTop: 40,
      marginBottom: 20,
      letterSpacing: 0.3,
    },
    joinSecondText: {
      marginBottom: 20,
    },
  },
};
