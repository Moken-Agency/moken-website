import firstImage from "../../images/product-marketing-first.jpg";
import secondImage from "../../images/product-marketing-second.jpg";

export default {
  firstSection: {
    title: {
      titleFirst: "EXPERTISE // PRODUCT MARKETING",
      titleConjunctions: "",
      titleSecond: "",
    },
    subtitle: `Unforgettable experiences to engage & empower consumers.`,
    imgURL: firstImage,
    subtitleContainerStyles: {maxWidth: 884, width: 'auto'},
    imgURLMobile: firstImage,
    infoBlock: {
      infoBlockContainerStyles: {maxWidth: 577, width: 'auto'},
      infoTitleFirst:
        "Notifications and in product marketing can boost app engagement by up to 88% and retention by 65%.",
      infoDescriptionFirst: "A sticky product can create a significant edge and decrease churn rate exponentially in today’s highly competitive market. Through product driven marketing we create unforgettable experiences for users. With a process that isn’t anywhere near linear, we adjust to align with each client’s product to ensure tactic viability and market fit for every marketing touchpoint."
      // infoSubtitleFirst: "— WORK WITH US",
    },
  },
  secondSection: {
    title: "PRODUCT MARKETING CAPABILITIES",
    mapItems: [
      {
        title: "Integrated Email Marketing",
        // route: ''
      },
      {
        title: "In-Product Marketing",
        // route: ''
      },
      {
        title: "User Retention & Optimization",
        // route: ''
      },
      {
        title: "Limited Budget Growth Tactics",
        // route: ''
      }
    ],
    imgURL: secondImage,
  },
  thirdSection: {
    title: "WHAT WE DO",
    mapItems: [
      {
        title:
          "Enthusiastic individuals working together to create extraordinary results.",
        btnTitle: "EXPLORE OUR EXPERTISE",
      },
    ],
  },
};
