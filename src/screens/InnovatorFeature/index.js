import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import "./index.scss";
import TitleTwoDescriptionWithBtn from "../Programs/components/TitleTwoDescriptionWithBtn";
import ImageTitleSubDescList from "../../components/ImageTitleSubDescList";
import options from "./options";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import EmailForm from "../../components/EmailForm";
import ImageBlock from "../../components/ImageBlock";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import TitleSubDescription from "../../components/TitleSubDescription";
import Button from "../../components/Button";

const InnovatorFeature = () => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"innovator-container"}>
      <HeaderTitle
        title={"INNOVATOR FEATURE"}
        subtitleClassName={'innovator-feature-header-subtitle'}
        descriptionClassName={'innovator-feature-header-description'}
        subtitle={"Show off your hard work, you deserve it."}
        description={"A community driven approach to showcasing & highlighting hardworking founders & innovators in the global startup ecosystem who are creating the future."}
        marginBottom={isMobile ? 152 : 142}
      />

      <ImageBlock type={"full"} />

      <TitleSubDescription title={'ABOUT THE INITIATIVE'}
                           subtitleClassName={'innovator-feature-about-subtitle'}
                           descriptionClassName={'innovator-feature-about-description'}
                           subtitle={'A community driven initiative designed to promote and highlight hardworking innovators throughout the global startup ecosystem.'}
                           description={'We understand what it means to create community. We also know how difficult it is to' +
                           ' build a startup, especially during a global crisis. This is why we want to further create ' +
                           'community by showcasing some of the most changeworthy founders and innovators working ' +
                           'diligently to create the future, even in times of crisis.'}
                           AdditionalComponent={() => {
                               return (
                                   <div style={{padding: isMobile ? '0 43px' : '0 14vw', marginTop: 50}}>
                                       <Button title={'SHARE YOUR STORY'}
                                               onClick={() => window.open('https://forms.gle/XYDR2H6eFcYq56sQ7', '_blank')} />
                                   </div>
                               )
                           }} />

      {/*<TitleTwoDescriptionWithBtn*/}
      {/*  title={*/}
      {/*    "We increase website leads, maximize revenu and produce a positive ROI " +*/}
      {/*    "— validated with measurable results."*/}
      {/*  }*/}
      {/*  mainTitle={'ABOUT THE INITIATIVE'}*/}
      {/*  firstText={*/}
      {/*    "Our capabilities span the breadth of operations, project, and" +*/}
      {/*    " product management; business strategy; marketing; design; technology; revenue" +*/}
      {/*    " optimization; talent acquisition; growth; and sales, across all industries " +*/}
      {/*    "through customized products, services, courses, workshops, solutions, and mentorship."*/}
      {/*  }*/}
      {/*  secondText={*/}
      {/*    "We partner with innovators through our tailored and integrative " +*/}
      {/*    "expertise, complemented by a vibrant ecosystem of game-changing partners to " +*/}
      {/*    "deliver accelerated, superior, and impactfully driven outcomes."*/}
      {/*  }*/}
      {/*/>*/}

      <ImageTitleSubDescList
        title={"WHAT YOU’LL GAIN"}
        subtitle={"We make it easy to kickstart your vision."}
        subtitleClassName={'innovator-feature-gain-subtitle'}
        listClassName={'innovator-feature-gain-list'}
        // description={
        //   "With packages at a startup price point, we work with founders and " +
        //   "ideators with high growth potential. We're passionate about big ideas and" +
        //   " working with people who feel the same."
        // }
        list={options.list}
        imgURL={""}
      />

      <LeftInfoWithRightImage
        withoutRightPadding
        mainTitle={"NEXT STEPS & APPLICATION"}
        titleClassName={"innovator-feature-steps-subtitle"}
        descriptionClassName={'innovator-feature-steps-description'}
        title={"Showcasing your accomplishments made efficient and easy."}
        description={
         `All we need is a submission form. No application, no fees, no headache. It’s simple. You work hard & we want 
         to showcase that to others in the community. Once submitted, our team will review your submission & contact 
         you if we need any further info. Your submission will then be processed, scheduled for promotion & you’ll be 
         notified once your feature is scheduled to go live!`
        }
        imgUrl={""}
        btnTitle={"SHARE YOUR STORY"}
        onClick={() => window.open('https://forms.gle/XYDR2H6eFcYq56sQ7', '_blank')}
      />

      <EmailForm withForm />
    </div>
  );
};

export default InnovatorFeature;
