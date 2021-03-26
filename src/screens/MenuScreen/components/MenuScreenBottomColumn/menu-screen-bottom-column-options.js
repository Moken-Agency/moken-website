import Modal from "../../../../components/Modal";
import React from "react";
import ReportBug from "../../../../components/ReportBug";
import Form from "../../../../components/Form";

export default {
  columns: [
    {
      title: "BUILD",
      containerStyles: {marginRight: 119},

      routs: [
        { title: "Starting Up Smart", route: "/start-up-smart" },
        { title: "Access by Moken", route: "/access" },
        { title: "Private Coaching", route: "/advisors", isComingSoon: true },
        { title: "Apply to MokenLabs", route: "/moken-labs", isComingSoon: true },
      ],
    },
    {
      title: "COLLABORATE",
      containerStyles: {marginRight: 108},
      routs: [
        { title: "Work with Mo + Ken", route: "/mo-ken", isComingSoon: true },
        { title: "Host an Event", route: "/host-an-event" },
        { title: "Sponsor the Future", route: "/advertise-with-us", isComingSoon: true },
        { title: "Become a Partner", route: "/our-partners" },
        { title: "Become an Ambassador", route: "/ambassador" },
      ],
    },
    {
      title: "EXPLORE",
      containerStyles: {marginRight: 103},

      routs: [
        { title: "Educate the Next Generation", route: "/mentorship" },
        { title: "Upcoming Events", route: "/upcoming-events" },
        { title: "Our Community", route: "/community" },
        { title: "Investor Opportunities", route: "/for-investors" },
        { title: "Innovation Week", route: "/innovation-week" },
      ],
    },
    {
      title: "CONNECT",
      routs: [
        { title: "Contact Us", route: "/connect-with-us" },
        { title: "FAQ", route: "/FAQs" },
        { title: "Meet the Team", route: "/people-leadership"},
        { title: "Report a Bug", route: "", pressableComponent: (isOpen, setIsOpen) => {
            return <ReportBug isOpen={isOpen} setIsOpen={setIsOpen} widthVW={40} heightVH={90}/>
          }
        },
      ],
    },
  ],
};
