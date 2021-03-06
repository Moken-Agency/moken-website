import React from "react";
import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import "./index.scss";

const InfoImgCompany = ({
  mainTitle = "",
  title = "",
  subtitle = "",
  imgURL = "",
  companyImage = "",
  startUpName = "",
  founderName = "",
  founderTitle = "",
}) => {
  const { isMobile, isMiddleResolution } = useWindowDimensions();

  return (
    <section className={"info-img-company"}>
      <Title
        title={mainTitle}
        containerStyles={{ padding: 0, marginBottom: isMobile ? 50 : 124 }}
      />
      <div
        style={{
          display: "flex",
          paddingLeft: isMobile || isMiddleResolution ? 0 : 50,
          alignItems: "center",
          flexDirection: isMobile || isMiddleResolution ? "column" : "row",
        }}
      >
        <div
          style={{
            marginRight: isMobile ? 0 : 100,
            marginBottom: isMobile || isMiddleResolution ? 40 : 0,
          }}
          className={'info-img-company-left-container'}
        >
          <Text
            size={50}
            animationType={"fade-up"}
            mobSize={35}
            type={"kBold"}
            textStyles={{lineHeight: isMobile ? '37px' : '53px'}}
            containerStyles={{ marginBottom: 63 }}
          >
            {title}
          </Text>
          <Text
            size={20}
            animationType={"fade-up"}
            textStyles={{ lineHeight: isMobile ? "26px" : "30px" }}
            mobSize={16}
            type={"kLight"}
            containerStyles={{ marginBottom: 55 }}
          >
            {subtitle}
          </Text>
          <div style={{ position: "relative", display: "flex" }}>
            <div
              style={{
                width: 2,
                height: 171,
                backgroundColor: "black",
                marginRight: 38,
              }}
            />
            <div>
              <img
                src={companyImage}
                style={{
                  marginBottom: 10,
                  width: 90,
                  height: 40,
                  backgroundColor: "grey",
                }}
              />
              <Text
                type={"kSemiBold"}
                animationType={"fade-up"}
                containerStyles={{ marginBottom: 30 }}
                size={24}
              >
                {startUpName}
              </Text>
              <Text
                type={"kSemiBold"}
                animationType={"fade-up"}
                containerStyles={{ marginBottom: 15 }}
                size={16}
                mobSize={10}
              >
                {founderName}
              </Text>
              <Text
                type={"kSemiBold"}
                animationType={"fade-up"}
                size={16}
                mobSize={10}
              >
                {founderTitle}
              </Text>
            </div>
          </div>
        </div>
        <img
          src={imgURL}
          style={{
            width: isMobile || isMiddleResolution ? "100%" : "30vw",
            height: isMobile ? 400 : 1000,
          }}
        />
      </div>
    </section>
  );
};

export default InfoImgCompany;
