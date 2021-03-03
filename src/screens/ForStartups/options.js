import projects from '../../images/projects';
import prommotoLong from "../../images/projects/prommoto-long.svg";

export default {
  programs: [
    {
      title: `Build with
Agency`,
      subtitle:
        `Ideate, build, and grow products, businesses, and teams. Integrate fluidly with you existing program acting 
        as an external innovation lab, from analysis and ideation to development. A full-service formula to introduce
         change without losing corporate focus.`,
      btnTitle: 'WORK WITH US',
      route: '/about-agency'
    },
    {
      title: "Collaborate with Events",
      subtitle:
      `Partner with us and our community to support and help startups do what they do best.`,
      btnTitle: "GET INVOLVED",
      route: '/host-an-event'
    },
  ],

  ourProjects: [
      {
        imgURL: projects.prommotoLong,
      },
    {
      imgURL: projects.iraqi,
    },
    {
      imgURL: projects.knowbie,
    },
    {
      imgURL: projects.blu,
      width: 148,
      height: 124
    },
    {
      imgURL: projects.ryr,
    },
  ]
  // ourProjects: [projects.prommotoLong, projects.iraqi,  projects.knowbie,  projects.blu, projects.ryr]
};
