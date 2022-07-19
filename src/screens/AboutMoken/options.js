import img1 from "../../images/aboutmoken/Group 111.svg";
import img2 from "../../images/aboutmoken/Group 211.svg";
import img3 from "../../images/aboutmoken/Group 11111.svg";
import img4 from "../../images/aboutmoken/Group 141.svg";

export default {
  collaborates: [
    {
      imgURL: img1,
      title: "Moken Agency",
      subtitle:
        "Moken Agency provides opportunities  to turn a idea into reality in the most efficient, and scalable way possible. In other words, it’s where founders and startups build, create, and grow.",
    },
    {
      imgURL: img2,
      title: "Moken Events",
      subtitle:
        "Moken Events is where we enage with as a community to connect, network, and create meaningful relationships. In short, it’s where founders and startups experience and share.",
    },
    {
      imgURL: img3,

      title: "Moken Program",
      subtitle:
        "Moken Programs creates a safe and inclusive environment to test, learn, fail, and play through diverse program and course offerings. Essentially, it’s here where founders and startups learn and evolve.",
    },
    // {
    //   imgURL: img4,

    //   title: "Access",
    //   subtitle:
    //     "An exclusive, invite-only community-driven platform of tools, content & courses for the next generation startups & founders. Access has something for everyone. In a nutshell, it’s where startups and founders connect, scale, and succeed.",
    // },
  ],
  purposes: [
    {
      title: "Build & Scale Your Startup",
      route: "/about-agency",
      hoverColour: "#FDCDC6",
      colourClassName: "light-coral",
    },
    // {
    //   title: "Access Your Full Potential",
    //   route: "/access",
    //   hoverColour: "#D5D5D5",
    //   colourClassName: "grey",
    // },
    {
      title: "Connect & Extend Your Network",
      route: "/events",
      hoverColour: "#FF9D72",
      colourClassName: "coral",
    },
    {
      isComingSoon: true,
      title: "Learn to Create The Future",
      route: "",
      // route: "/about-programs",
      hoverColour: "#EFB95E",
      colourClassName: "orange",
    },
  ],
};
