import partners from '../../images/partners';

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
  partners: [
      {
        imgURL: partners.ink,
      },
    {
      imgURL: partners.segment,
    },
    {
      imgURL: partners.hubspot,
    },
    {
      imgURL: partners.owner,
    },
    {
      imgURL: partners.fast,
    },
  ]
  // ourProjects: [projects.prommotoLong, projects.iraqi,  projects.knowbie,  projects.blu, projects.ryr]
};
