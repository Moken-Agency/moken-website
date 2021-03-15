import React, {useState} from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import TitleRowSubDes from "../../components/TitleRowSubDes";
import options from "./options";
import TitleSubDescRounded from "../Programs/AboutPrograms/TitleSubDescRounded";
import Title from "../../components/Title";
import "./index.scss";
import LeftImageTitleSubDesList from "../../components/LeftImageTitleSubDesList";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import EmailForm from "../../components/EmailForm";
import mentorshipFirst from "../../images/mentorship-first.jpg";
import mentorshipSecond from "../../images/mentorship-second.jpg";
import mentorshipThird from "../../images/mentorship-third.jpg";
import Form from "../../components/Form";

const Mentorship = () => {
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [isFormSecondOpened, setIsFormSecondOpened] = useState(false);

    return (
    <div className={"mentorship-container"}>
        <Form isOpen={isFormOpened} setIsOpen={setIsFormOpened} formName={'Partnership Application Form'}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNWRpMITHHWPNhulHQArjTfad7cGcWxGRZdr4XYxPI-3rQTA/viewform?embedded=true" width={'100%'} height="auto" frameborder="0" marginheight="0" marginwidth="0"/>
        </Form>
      <HeaderTitle
        title={"MENTORSHIP"}
        subtitle={"Creatives, builders & entreprenuers pursuing action."}
        marginBottom={94}
        description={"Together we’re creating, inspiring, and educating through an unmatched global ecosystem."}
      />

      <ImageBlock position={"right"} url={mentorshipFirst}/>

      <TitleRowSubDes
        title={"ABOUT MENTORSHIP"}
        subtitle={"Empowering one another in creating change around the world."}
        description={`Mentors provide actionable strategies, business advice, support, and execution assistance when 
        founders need it most. As a mentor you can make a profound difference in a startups trajectory by simply 
        sharing your experiences and expertise. Why is having mentor so crucial to a startup? Well, in the case of
         Moken mentors, we look for "been-there-done-that" type of people where they have gone through business
          hardships have succeeded in their fields. Thus, providing a deeply empathetic understanding of not only
           the industry but the journey along the way. As a mentor, you will able to help founders in realising their
            goals and provide them with the necessary guidelines on how to achieve them.`}
        btnTitle={'APPLY TO MENTOR'}
        onClick={() => setIsFormOpened(true)}
      />

      <Title
        title={"PROGRAM OPPORTUNITIES"}
        className={"mentorship-partnerships-title"}
      />

      <section className={"mentorship-partnerships-container"}>
        {options.partnerships.map((partnership, index) => (
          <TitleSubDescRounded
            {...partnership}
            key={"TitleSubDescRounded" + index}
          />
        ))}
      </section>

      <LeftImageTitleSubDesList
        imgUrl={mentorshipSecond}
        title={"THE PERKS OF MENTORSHIP"}
        subtitle={"Experience. Networking. Encouragement."}
        description={`Our mentor team is comprised of creative minds, savvy business owners, dedicated marketing and
         advertising professionals, brand leaders, media icons, and revolutioary tech companies. Together we come
          together to learn, teach, network, and  inspire the next generation.`}
        list={options.benefits}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        imgUrl={mentorshipThird}
        mainTitle={"NEXT STEPS & APPLYING"}
        title={"Join our trusted community of partners and market what you do."}
        description={`Our role consists of taking the time to understand your business model, 
                                    and suggesting creative and high-performing digital strategies. Our avant-garde 
                                    tactics are in line with the current market, blend seamlessly with our clients’ 
                                    operational realities, and eliminate risks that aren’t necessary.`}
        btnTitle={"APPLY TO MENTOR"}
      />

      <EmailForm withForm />
    </div>
  );
};

export default Mentorship;
