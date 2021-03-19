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
      title: `Collaborate with
Events`,
      subtitle:
      `Partner with us and help startups do what they do best. Events are one of the most effective ways to help a startup grow. We bridge the gap early on making it easier to leverage networking, together.`,
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
