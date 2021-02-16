import Text from "../../../../components/Text";
import CommunityPartner from "../../../../components/CommunityPartner";
import SubmitYourResume from "../../../../components/SubmitYourResume";
import React from "react";
import "./index.scss";
import Title from "../../../../components/Title";
import BigDataSquares from "../../../../components/BigDataSquares";

const ProgramCommunityListPartner = ({
  title = "",
  subtitle = " ",
  options = [],
  onClick,
  AdditionalComponent,
  widthItem = 70 / options.length + "vw",
  itemContainerStyles = {},
  type = "",
}) => {
  return (
    <>
      <Title title={title} />

      <section className={"labs-join-container"}>
        <Text
          animationType={"fade-in"}
          type={"kBold"}
          size={55}
          // size={55}
          mobSize={35}
          className={"program-community-list-partner-subtitle"}
          textStyles={{ letterSpacing: 0.5 }}
        >
          {subtitle}
        </Text>

        <div className={`labs-join-partners-list ${type === 'big' ? 'big-styles-container' : 'small-styles-container'}`}>
          {options.map((option) => {
            return (
              <>
                {type === "big" ? (
                  <BigDataSquares {...option} />
                ) : (
                  <CommunityPartner
                    {...option}
                    containerStyles={{
                      // width: widthItem,
                      // ...itemContainerStyles,
                    }}
                  />
                )}
              </>
            );
          })}
        </div>

        {onClick ? (
          <div className={"labs-join-schedule-container"}>
            <SubmitYourResume
              title={"See your schedule"}
              color={"black"}
              onClick={onClick}
            />
          </div>
        ) : null}

        {AdditionalComponent ? <AdditionalComponent /> : null}
      </section>
    </>
  );
};

export default ProgramCommunityListPartner;
