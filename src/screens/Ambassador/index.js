import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import ImageBlock from "../../components/ImageBlock";
import TitleRowSubDes from "../../components/TitleRowSubDes";
import "./index.scss";
import LeftInfoWithRightImage from "../Programs/components/LeftInfoWithRightImage";
import EmailForm from "../../components/EmailForm";
import HeaderWithBackground from "../../components/HeaderWithBackground";
import ambassadorHeader from "../../images/ambassador-header.jpg";
import ambassadorFirst from "../../images/ambassador-first.jpg";
import ambassadorSecond from "../../images/ambassador-second.jpg";
import ambassadorThird from "../../images/ambassador-third.jpg";

const Ambassador = () => {
    return (
        <div className={'ambassador-container'}>
          <HeaderWithBackground webBackground={ambassadorHeader}
                                title={'AMBASSADOR PROGRAM'}
                                subtitleClassName={'ambassador-header-subtitle'}
                                subtitle={'Educate. Innovate. Create.'}
          />

            <LeftInfoWithRightImage
                containerStyles={{marginTop: 174}}
                descriptionClassName={'ambassador-second-image-block-description'}
                withoutRightPadding
                imgUrl={ambassadorFirst}
                mainTitle={"AMBASSADOR PROGRAM OVERVIEW"}
                title={"For leaders of the future who are creating tomorrow, today."}
                description={`Designed to create leadership opportunities for innovators of all backgrounds, our
                 Ambassador Program strives to impact communities around the globe. Ambassadors gain hands on
                  marketing, business, and networking experience from the ground up while building their resume,
                   earning money or course credits (pending your school’s approval) and hopefully having some fun!`}
                btnTitle={"APPLY AS AN AMBASSADOR"}
                onClick={() => window.open('https://forms.gle/xkzBDySrjpfZWnom9', '_blank')}
                isLeftImage
            />

            <TitleRowSubDes
                title={"AMBASSADOR OPPORTUNITIES"}
                subtitle={"Empowering one another in creating change around the world."}
                description={`We know that dynamic actions define the future and that the ambition to lead requires the tenacity to adapt. We empower ambassadors to create community connections through meaningful networking, events, business initiaitives, and inclusive programming. But not to worry we equip you with the tools, resources, knowledge, and support to help you build a successful Moken Satellite Hub locally within your community, no matter where that might be.`}
            />

            <LeftInfoWithRightImage
                onClick={() => window.open('https://forms.gle/xkzBDySrjpfZWnom9', '_blank')}
                withoutRightPadding
                imgUrl={ambassadorSecond}
                mainTitle={"WHAT IT TAKES"}
                imageClassName={'ambassador-takes-image'}
                titleClassName={'ambassador-takes-title'}
                descriptionClassName={'ambassador-takes-description'}
                descriptions={[
                    'With an array of opportunities from hosting events to developing incubator programs, Moken Ambassadors harness the power of imagination to create the future, their way. ',
                    'Moken’s Ambassador Program is not a full time gig, unless you want it to be. But, it’s meant to be a way for innovators to create community locally in the name of innovation while doing what they love. So while what it specifically takes will directly relate to what you want to make of the opportunity, passion, motivation, and work ethic will be a must.',

                ]}
                title={"Ingenuity, tenacity, and creativity are crucial in  Ambassadorship. "}
                btnTitle={"APPLY AS AN AMBASSADOR"}
            />

            <LeftInfoWithRightImage
                onClick={() => window.open('https://forms.gle/xkzBDySrjpfZWnom9', '_blank')}
                imgUrl={ambassadorThird}
                mainTitle={"NEXT STEPS & APPLYING"}
                description={'Educate, inspire and connect future and current founders, entreprenuers, innovators, and investors by becoming a Moken Ambassador. Lead your community and make a long-lasting impact by joining other leaders from countries around the world.'}
                title={"Develop community, make friends, and create your future."}
                btnTitle={"APPLY AS AN AMBASSADOR"}
                descriptionClassName={'ambassador-steps-description'}
                imageClassName={'ambassador-steps-image'}
                isLeftImage
            />

            <EmailForm withForm />
        </div>
    );
};

export default Ambassador;
