import Text from "../../../../components/Text";
import SubmitYourResume from "../../../../components/SubmitYourResume";
import React from "react";
import "./index.scss";
import Title from "../../../../components/Title";
import UnderlineTextWithIcon from "../../../../components/UnderlineTextWithIcon";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import {useHistory} from "react-router-dom";

const FirstItem = ({ title, subtitle, imgURL = '' }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"labs-benefits-container-info-block-work"}>
      {imgURL ? <img src={imgURL} className={'first-item-img'}/> : null}
      <Text
        size={22}
        // size={'1.4vw'}
        mobSize={22}
        type={"kBold"}
        // type={"semiBold"}
        animationType={"fade-up"}
        className={"labs-benefits-list-item-first"}
      >
        {title}
      </Text>
      <Text
        // size={'1.25vw'}
        size={20}
        mobSize={16}
        animationType={"fade-up"}
        textStyles={{ lineHeight: isMobile ? "26px" : "30px", fontWeight: 300 }}
        type={"kLight"}
        // type={"light"}
      >
        {subtitle}
      </Text>
    </div>
  );
};

const TwoColumnsHugeInfo = ({
  title = "",
  leftTitle = "",
  rightTitle = "",
  rightFirstListTitle = "",
  firstList = [],
  rightSecondListTitle = "",
  secondList = [],
  secondListLikeFirst = false,
  secondListWithIcon = false,
  containerStyles = {}
}) => {
  const { isMobile } = useWindowDimensions();
    const history = useHistory();


    return (
    <>
      <Title title={title} className={"labs-benefits-title"} />
      <section className={"labs-benefits-container"} style={containerStyles}>
        <Text
          type={"kBold"}
          // type={"extraLight"}
          // size={'3.4vw'}
          size={50}
          mobSize={35}
          animationType={"fade-up"}
          className={"labs-benefits-container-title"}
        >
          {leftTitle}
        </Text>
        <div className={"labs-benefits-container-info-block"}>
          <Text
            // size={'1.25vw'}
            size={20}
            mobSize={16}
            type={"kLight"}
            // type={"light"}
            animationType={"fade-up"}
            textStyles={{ lineHeight: isMobile ? "26px" : "30px", fontWeight: 300 }}
            className={"labs-benefits-container-info-block-first-title"}
          >
            {rightTitle}
          </Text>

          {rightFirstListTitle ? (
            <Text
              type={"kRegular"}
              // type={"semiBold"}
              // size={'.88vw'}
              size={14}
              animationType={"fade-up"}
              mobSize={10}
              className={"labs-benefits-container-info-block-second-title"}
              textStyles={{ letterSpacing: 4 }}
              containerStyles={{}}
            >
              {rightFirstListTitle}
            </Text>
          ) : null}

            {firstList && firstList.length ? <div className={"labs-benefits-container-info-block-works-container"}>
                {firstList.map((el, index) => {
                    return <FirstItem {...el} key={"first item" + index}/>;
                })}
            </div> : null}

            {rightSecondListTitle ? <Text
                // type={"kRegular"}
                type={"kSemiBold"}
                size={14}
                mobSize={10}
                animationType={"fade-up"}
                className={"two-column-right-second-list-title"}
                textStyles={{letterSpacing: 4}}
            >
                {rightSecondListTitle.toUpperCase()}
            </Text> : null}

          {!secondListLikeFirst
            ? secondList.map(({ title = "", subtitle = "", link = "", route = '/', hoverColour = '#000', colourClassName = '' }) => {
                return (
                  <UnderlineTextWithIcon
                    withIcon={secondListWithIcon}
                    color={"black"}
                    // size={'2.13vw'}
                    hoverColour={hoverColour}
                    size={34}
                    colourClassName={colourClassName}
                    mobSize={18}
                    className={"two-column-submit-your-resume"}
                    title={title}
                    onClick={() => link? window.open(link, '_blank') : history.push(route) }
                  />
                );
              })
            : null}

            {secondListLikeFirst
                ? <div className={"labs-benefits-container-info-block-works-container"}>
                    {
                        secondList.map(({ title = "", subtitle = "", link = "" }) => {
                            return <FirstItem title={title} subtitle={subtitle} />;
                        })
                    }
          </div> : null}
        </div>
      </section>
    </>
  );
};

export default TwoColumnsHugeInfo;
