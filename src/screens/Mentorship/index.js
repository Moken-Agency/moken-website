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

    return (
    <div className={"mentorship-container"}>
        <Form isOpen={isFormOpened} setIsOpen={setIsFormOpened} formName={'Partnership Application Form'}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSchKoeYff36hGE5JIcEWQBvq-F0oiUfBwyO8GGntTvs6zCSnw/viewform?embedded=true" width={'100%'} height="auto" frameborder="0" marginheight="0" marginwidth="0"/>
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
        description={''}
        isButtonLeft
        descriptions={[
            'Mentors provide actionable strategies, business advice, support, and execution assistance when founders need it most. As a mentor you can make a profound difference in a startups trajectory by simply sharing your experiences and expertise.',
            `Why is having mentor so crucial to a startup? Well, in the case of Moken mentors, we look for "been-there-done-that" type of people where they have gone through business hardships have succeeded in their fields. Thus, providing a deeply empathetic understanding of not only the industry but the journey along the way. As a mentor, you will able to help founders in realising their goals and provide them with the necessary guidelines on how to achieve them.`
        ]}
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
        descriptionClassName={'mentorship-steps-description'}
        titleClassName={'mentorship-steps-title'}
        mainTitle={"NEXT STEPS & APPLICATION"}
        title={"Turning big problems into bigger breakthroughs, together."}
        description={`As mentors we’re strategists, designers, developers, and business experts who fix things, fast. You’ll work closely with our startups and founders to define and develop impactful technology and powerful experiences. Whatever the challenge, together we’ll hurl ourselves at figuring things out – a healthy obsession for someone driven by innovating the future.`}
        btnTitle={"APPLY TO MENTOR"}
        onClick={() => setIsFormOpened(true)}
      />

      <EmailForm withForm />
    </div>
  );
};

export default Mentorship;
