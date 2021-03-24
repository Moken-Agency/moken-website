import Modal from "../../../../components/Modal";
import React from "react";
import ReportBug from "../../../../components/ReportBug";
import Form from "../../../../components/Form";

export default {
  columns: [
    {
      title: "BUILD",
      routs: [
        { title: "Starting Up Smart", route: "/startup-smart" },
        { title: "Access by Moken", route: "/access" },
        { title: "Private Coaching", route: "/advisors" },
        { title: "Apply to MokenLabs", route: "/mokenlabs" },
      ],
    },
    {
      title: "COLLABORATE",
      routs: [
        { title: "Work with Mo + Ken", route: "/mo-ken" },
        { title: "Host an Event", route: "/host-an-event" },
        { title: "Sponsor the Future", route: "/sponsorship" },
        { title: "Become a Partner", route: "/partnerships-growth" },
        { title: "Become an Ambassador", route: "/ambassador" },
      ],
    },
    {
      title: "EXPLORE",
      routs: [
        { title: "Educate the Next Generation", route: "/mentorship" },
        { title: "Upcoming Events", route: "/upcoming-events" },
        { title: "Our Community", route: "/community" },
        { title: "Investor Opportunities", route: "/for-investors" },
        { title: "Innovation Week", route: "/innovation-committee" },
      ],
    },
    {
      title: "CONNECT",
      routs: [
        { title: "Contact Us", route: "/connect-with-us" },
        { title: "FAQ", route: "/FAQs" },
        { title: "Meet the Team", route: "/product-testing-team"},
        { title: "Report a Bug", route: "", pressableComponent: (isOpen, setIsOpen) => {
            return <ReportBug isOpen={isOpen} setIsOpen={setIsOpen} widthVW={40} heightVH={90}/>
          }
        },
      ],
    },
  ],
};
