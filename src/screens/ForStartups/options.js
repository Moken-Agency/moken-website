import projects from '../../images/projects';
import prommotoLong from "../../images/projects/prommoto-long.svg";

export default {
  programs: [
    {
      title: `Work with 
Mo + Ken`,
      subtitle:
        `We believe that market leadership requires deep courage — from founder to founder.`,
      btnTitle: 'WORK WITH US',
      route: '/mo-ken'
    },
    {
      title: `Get Started
Smarter`,
      subtitle:
      `Does your startup need a specific solution? With packages at a startup price point, we work with founders and ideators with high growth potential. We're passionate about big ideas and working with people who feel the same`,
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
