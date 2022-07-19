import React, { useState } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import TitleRowSubDes from "../../components/TitleRowSubDes";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import ColorBlock from "../../components/ColorBlock";
import "./index.scss";
import LeftImageTitleSubDesList from "../../components/LeftImageTitleSubDesList";
import options from "./options";
import EmailForm from "../../components/EmailForm";
import { useHistory } from "react-router-dom";
import accessFirst from "../../images/access-first@3x.jpg";
import accessSecond from "../../images/access-second@3x.jpg";
import accessThird from "../../images/access-third@3x.jpg";
import accessFour from "../../images/access-four@3x.jpg";
import Form from "../../components/Form";

const Access = () => {
  let history = useHistory();
  const [isFormOpened, setIsFormOpened] = useState(false);

  return (
    <div className={"access-container"}>
      <Form
        isOpen={isFormOpened}
        setIsOpen={setIsFormOpened}
        formName={"Startup Insights"}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOr4yWT2Fffz8dVK9xF3DUfNeP4_kQ8YSwI59YXY_HRP5z7Q/viewform?embedded=true"
          width={"100%"}
          height="auto"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        />
      </Form>
      {/* <HeaderTitle
        title={"ACCESS"}
        subtitleClassName={"access-header-subtitle"}
        descriptionClassName={"access-header-description"}
        subtitle={"Where startups network, scale & succeed."}
        description={
          "A digital hub where founders, entrepreneurs, innovators, and investors to connect and grow, together."
        }
      />

      <ImageBlock position={"right"} url={accessFirst} /> */}

      {/* <TitleRowSubDes
        title={"ABOUT ACCESS"}
        descriptions={[
          "The Access Network is an exclusive, invite-only network built for ambitious humans just like you. It’s a place where entrepreneurs, founders, startups, industry experts, side-hustlers, freelancers, and investors ask questions, exchange ideas, share resources, and connect with one another.",
          "As humans we are built for connection. Even though we are more connected in certain ways, as innovators we are often painfully devoid of the true connection of being honest, vulnerable and real with other people. The Access Network is for exactly that. It's for those who have the desire to connect with other ambitious founders, creators, freelancers, business owners, and industry experts and are willing to openly share experience and expertise.`",
        ]}
        subtitleClassName={"access-about-subtitle"}
        subtitle={"Empowering one another in creating change around the world."}
      /> */}

      {/* <LeftInfoWithRightImage
        mainTitle={"ACCESS NETWORK"}
        title={"Join our trusted community of founders and startups and scale what you do."}
        description={`The Access Network is a place for founders, entrepreneurs, innovators, and investors to connect and grow, together. You'll learn from others' experience to help scale your ideas, avoid mistakes, and grow your venture. You'll connect with founders, investors, and innovators around the world who understand where you're at and what you're going through. And finally, you'll discover unmatched opportunities designed to promote and support you and your venture every step of the way by industry experts.`}
        imgUrl={accessSecond}
        btnTitle={"JOIN THE NETWORK"}
        withoutRightPadding
        imageClassName={'access-network-image'}
        onClick={() => window.open('https://network.mokenstartups.com', '_blank')}
      /> */}

      <ColorBlock
        title={"Access new markets."}
        subtitle={"EXPLORE PARTNERSHIP OPPORTUNITIES"}
        withIcon
        textColor={"white"}
        backgroundColor={"black"}
        onClick={() => history.push("/our-partners")}
      />

      <LeftImageTitleSubDesList
        imgUrl={accessThird}
        title={"THE BENEFITS"}
        subtitle={"We make it easy to kickstart your vision."}
        description={`Leverage the Access Network to help make better, well-informed decisions about the things that are most important to you & your business`}
        list={options.benefits}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        imageClassName={"access-partner-image"}
        mainTitle={"ACCESS PARTNER PROGRAM"}
        title={
          "Join our trusted community of partners and access new market opportunities."
        }
        description={`Anchored in simplicity we develop strategic partnerships with gamechanging individuals and companies that want to do better and be better. We know we have the power to shape the world, just as great partnerships have the power to revolutionize industries.`}
        imgUrl={accessFour}
        onClick={() => history.push("/our-partners")}
        btnTitle={"PARTNER WITH US"}
      />

      {/* <TitleRowSubDes
        title={"CREATE THE FUTURE OF ACCESS"}
        subtitleClassName={"access-future-subtitle"}
        description={`We know that dynamic actions define the future and that the ambition to lead requires the tenacity to adapt. The Network is only the tip of the iceberg for all that Access hopes to be. You can help us shape the future, simply tell us what you need to succeed and we’ll make it a reality.`}
        subtitle={"Create the future of access for founders & startups."}
        onClick={() => setIsFormOpened(true)}
        btnTitle={"SHARE YOUR INSIGHTS"}
      /> */}

      <EmailForm withForm />
    </div>
  );
};

export default Access;
