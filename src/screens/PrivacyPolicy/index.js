import React from "react";
import PageGenerator from "../../components/PageGenerator";
import Text from "../../components/Text";
import otherOptions from "./options";
import "./index.scss";

const PrivacyPolicy = () => {
  return (
    <div className={"privacy-container"}>
      <div className={"privacy-header-container"}>
        <Text
          size={95}
          animationType={"fade-in"}
          mobSize={50}
          color={"white"}
          type={"kBold"}
        >
          Privacy Policy
        </Text>
      </div>
      <PageGenerator
        data={otherOptions}
        containerStyles={{ padding: "12vw 0" }}
      />
    </div>
  );
};

export default PrivacyPolicy;
