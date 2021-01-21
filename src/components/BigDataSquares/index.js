import Text from "../Text";
import Button from "../Button";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const BigDataSquares = ({ title, subtitle, btnTitle = "GET INVOLVED" }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div
      style={{
        width: isMobile ? "auto" : 450,
        height: isMobile ? "auto" : 450,
        padding: isMobile ? "35px 0 0 35px" : "35px 0 0 62px",
        border: "1px solid #dadada",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: isMobile ? 100 : 135,
      }}
    >
      <Text
        size={55}
        type={isMobile ? "thin" : "extraLight"}
        mobSize={25}
        containerStyles={{marginRight: 35}}
        textStyles={{ lineHeight: isMobile ? "24px" : "63px" }}
      >
        {title}
      </Text>
      <Text
        size={18}
        type={"light"}
        mobSize={16}
        textStyles={{ lineHeight: isMobile ? "25px" : "35px" }}
        containerStyles={{
          width: isMobile ? "auto" : 278,
          marginBottom: isMobile ? 44 : 0,
          marginTop: isMobile ? 22 : 0,
        }}
      >
        {subtitle}
      </Text>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          title={btnTitle}
          backgroundColor={"black"}
          textColor={"white"}
          mobSize={10}
          containerStyles={{ padding: isMobile ? "23px 16px" : "35px 32px" }}
          size={14}
        />
      </div>
    </div>
  );
};

export default BigDataSquares;
