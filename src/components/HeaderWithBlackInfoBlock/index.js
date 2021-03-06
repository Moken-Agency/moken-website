import React from "react";
import Text from "../Text";
import "./index.scss";
import ProgramDetails from "../../screens/Programs/components/ProgramDetails";
// moken: {
//     marginBottom: isMobile ? 48 : '1.4vw',
//         letterSpacing: 4
// },
// working: {
//     marginBottom: isMobile ? 42 : '2.4vw'
//
// },
const HeaderWithBlackInfoBlock = ({
  title = "",
  subtitle = "",
  description = "",
  marginBottom = 225,
  blackInfoData,
  type = "",
  programSubtitle,
}) => {
  return (
    <div className={"header-black-container"} style={{ marginBottom }}>
      <div className={"header-black-title-container"}>
        <Text
            size={16}
          // size={".9vw"}
          mobSize={14}
          animationType={"fade-in"}
          type={"kMedium"}
          // type={"semiBold"}
          className={"header-black-main-title"}
        >
          {title}
        </Text>
        <Text
          // size={"4.2vw"}
          size={75}
          mobSize={45}
          animationType={"fade-in"}
          type={"kBold"}
          // type={"thin"}
          className={"header-black-subtitle"}
        >
          {subtitle}
        </Text>
        {description ? (
          <Text
            size={20}
            mobSize={16}
            animationType={"fade-in"}
            className={"header-black-description"}
            // type={"light"}
            type={"kLight"}
          >
            {description}
          </Text>
        ) : null}
      </div>
      <ProgramDetails
        options={blackInfoData}
        type={type}
        subtitle={programSubtitle}
      />
    </div>
  );
};

export default HeaderWithBlackInfoBlock;
