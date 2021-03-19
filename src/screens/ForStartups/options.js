import projects from '../../images/projects';
import prommotoLong from "../../images/projects/prommoto-long.svg";

export default {
  programs: [
    {
      title: `Work with 
Mo + Ken`,
      subtitle:
        `Ideate, build, and grow products, businesses, and teams. Integrate fluidly with you existing program acting as an external innovation lab, from analysis and ideation to development. A full-service formula to introduce change without losing corporate focus.`,
      btnTitle: 'WORK WITH US',
      route: '/mo-ken'
    },
    {
      title: `Get Started
Smarter`,
      subtitle:
      `Fundamental solutions designed and priced specifically for startups. Our startup-smart packages are created to give startups an option to access essential components required for the success of their business, smarter, quicker, and more affordable.`,
      btnTitle: "LEARN MORE",
      route: '/start-up-smart'
    },
  ],

  ourProjects: [
      {
        link: 'https://prommoto.com',
        imgURL: projects.prommotoLong,
      },
    {
      link: 'https://iraqisouq.com',
      imgURL: projects.iraqi,
    },
    {
      link: 'https://getknowbie.com',
      imgURL: projects.knowbie,
    },
    {
      imgURL: projects.blu,
      width: 148,
      height: 124,
      link: 'https://blupharma.ca'
    },
    {
      link: 'https://rentyourride.ca',
      imgURL: projects.ryr,
    },
  ]
  // ourProjects: [projects.prommotoLong, projects.iraqi,  projects.knowbie,  projects.blu, projects.ryr]
};
