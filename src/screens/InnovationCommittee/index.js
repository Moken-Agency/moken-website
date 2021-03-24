import React, {useState} from "react";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "./index.scss";
import InnovationWeekSvg from "../../images/innovation-week.svg";
import InnovationSquare from "../../images/innovation-square.svg";
import ArrowUpRight from "../../images/arrow-up-right-white.svg";
import options from "./options";
import colors from "../../constans/colors";
import InnovationMobHeaderImage from "../../images/innovation-mob-header.svg";
import InnovationMobFooterImage from "../../images/innovation-mob-footer.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../../components/ImageBlock";
import {useHistory} from "react-router-dom";
import Form from "../../components/Form";

const InnovationCommittee = () => {
  const history = useHistory();
  const [isFormOpened, setIsFormOpened] = useState(false);

  const { isMobile } = useWindowDimensions();

  return (
    <div className={"innovation-committee-container"}>
      <Form isOpen={isFormOpened} setIsOpen={setIsFormOpened} backgroundColor={'#fc665c'} formName={'Innovation Week Committee Interest Application'}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWL5SgL8QnPUTP0RkAZdH5ZEToPq00AnU5j7aN9z1lt-U2bw/viewform?embedded=true" width={'100%'} height="auto" frameborder="0" marginheight="0" marginwidth="0"/>
      </Form>
      <header>
        <div className={"innovation-committee-go-back-container"}>
          <div className={"innovation-committee-go-back-transition-block"}
               onClick={() => window.open('http://innovate.mokenstartups.com', '_blank')}>
            <Text
              className={"innovation-committee-go-back-text"}
              color={"white"}
              mobSize={13}
              size={16}
              type={"extraBoldDemo"}
            >
              Back to Moken Startups
            </Text>
            <img src={ArrowUpRight} />
          </div>
        </div>
        <div className={"innovation-committee-nav-main-container"}>
          <img src={InnovationWeekSvg} />
          <div className={"innovation-committee-nav-container"}>
            <nav>
              {options.menu.map(({ title, link }, index) => {
                return (
                  <Text
                    key={"InnovationCommitteeMenu" + index}
                    size={16}
                    className={"innovation-committee-nav-item"}
                    type={"extraBoldDemo"}
                    color={colors.grey}
                    // onClick={() => alert(link)}
                  >
                    {title}
                  </Text>
                );
              })}
            </nav>
            <Button
              title={"Coming 2022"}
              type={"innovation-blue"}
              textType={"extraBoldDemo"}
            />
          </div>
        </div>
      </header>

      <ImageBlock
        className={"innovation-committee-mob-image"}
        url={InnovationMobHeaderImage}
      />

      <main>
        <div className={"innovation-committee-main-container"}>
          <div className={'innovation-committee-texts-container'}>
            <Text
                className={"innovation-committee-main-title"}
                size={16}
                mobSize={12}
                type={"extraBoldDemo"}
            >
              6 Days of Unforgettable Innovation
            </Text>

            <div className={"innovation-committee-main-text-container"}>
              <Text size={69} mobSize={36} containerStyles={{marginRight: 15}} type={"blackLight"}>
                A
              </Text>
              <Text size={69} mobSize={36} type={"extraBoldDemo"}>
                Global
              </Text>
            </div>

            <Text
                size={69}
                mobSize={36}
                className={"innovation-committee-main-last-text"}
                type={"blackLight"}
                textStyles={{lineHeight: "80px"}}
            >
              meeting point
            </Text>

            <Text
                type={"blackLight"}
                size={21}
                className={"innovation-committee-main-text"}
            >
              Connecting innovators, creators, startups, founders, and investors
              around the world in the spirit of sharing knowledge & experience
              across the global startup ecosystem.
            </Text>
          </div>

          {/*<Text*/}
          {/*  size={12}*/}
          {/*  type={"extraBoldDemo"}*/}
          {/*  className={"innovation-committee-main-small-text"}*/}
          {/*>*/}
          {/*  Committee Applications Now Open*/}
          {/*</Text>*/}

          <div className={"innovation-committee-btn-container"}>
            <Button
              title={"Join the Committee"}
              type={"innovation-coral"}
              size={16}
              mobSize={12}
              textType={"extraBoldDemo"}
              className={"innovation-committee-btn-first"}
              onClick={() => setIsFormOpened(true)}
            />
            <Button
              title={"Request More Info"}
              type={"innovation-bordered-coral"}
              size={16}
              mobSize={12}
              textType={"extraBoldDemo"}
            />
          </div>
        </div>

        <div className={"innovation-main-image"} >
          <img src={InnovationSquare} />
        </div>
      </main>

      <ImageBlock
        className={"innovation-committee-mob-image"}
        position={"right"}
        url={InnovationMobHeaderImage}
      />
    </div>
  );
};

export default InnovationCommittee;
