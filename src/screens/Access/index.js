import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import TitleRowSubDes from "../../components/TitleRowSubDes";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import "./index.scss";
import LeftImageTitleSubDesList from "../../components/LeftImageTitleSubDesList";
import options from "./options";
import EmailForm from "../../components/EmailForm";

const Access = () => {
  return (
    <div className={"access-container"}>
      <HeaderTitle
        title={"ACCESS"}
        subtitle={"Success fuelled by partnership."}
        description={"Together creating an unmatched global ecosystem."}
      />

      <ImageBlock type={"full"} />

      <TitleRowSubDes
        title={"ABOUT MENTORSHIP"}
        description={`We know that dynamic actions define the future and that the ambition to lead
                             requires the tenacity to adapt. This is why we partner with clients, startups, and founders 
                             who challenge themselves to be exceptional leaders and are unwavering in our commitment to 
                             do right by our clients, team, partners, and communities. We define our ambitions with clients, 
                             then work together as one team to create high levels of value striving to set new standards of 
                             excellence within each industry.`}
        subtitle={"Empowering one another in creating change around the world."}
      />

      <LeftInfoWithRightImage
        mainTitle={"NEXT STEPS & APPLYING"}
        title={"Join our trusted community of partners and market what you do."}
        description={`Our role consists of taking the time to understand your business model, 
                                    and suggesting creative and high-performing digital strategies. Our avant-garde
                                     tactics are in line with the current market, blend seamlessly with our clients’
                                      operational realities, and eliminate risks that aren’t necessary.`}
        imgUrl={""}
        btnTitle={"APPLY TO INCUBATOR"}
      />

      <ColorBlock
        title={"Looking for the next big thing?"}
        subtitle={"APPLY NOW"}
        withIcon
        textColor={"black"}
        backgroundColor={"grey"}
        type={"thin"}
        className={"access-color-block"}
        size={30}
      />

      <LeftImageTitleSubDesList
        imgUrl={""}
        title={"THE BENEFITS"}
        subtitle={"We make it easy to kickstart your vision."}
        description={`With packages at a startup price point, we work with founders and 
                                      ideators with high growth potential. We're passionate about big ideas and working 
                                      with people who feel the same.`}
        list={options.benefits}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        mainTitle={"ACCESS PARTNER PROGRAM"}
        title={"Join our trusted community of partners and market what you do."}
        description={`Our role consists of taking the time to understand your business model, 
                                    and suggesting creative and high-performing digital strategies. Our avant-garde
                                     tactics are in line with the current market, blend seamlessly with our clients’
                                      operational realities, and eliminate risks that aren’t necessary.`}
        imgUrl={""}
        btnTitle={"APPLY TO INCUBATOR"}
      />

      <TitleRowSubDes
        title={"CREATE THE FUTURE OF ACCESS"}
        description={`We know that dynamic actions define the future and that the ambition to lead
                             requires the tenacity to adapt. This is why we partner with clients, startups, and founders 
                             who challenge themselves to be exceptional leaders and are unwavering.`}
        subtitle={"Create the future of access for founders & startups."}
        onClick={() => {}}
      />

      <EmailForm withForm />
    </div>
  );
};

export default Access;
