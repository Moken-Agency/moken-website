import React from "react";
import Text from "../Text";
import Button from "../Button";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useHistory} from "react-router-dom";

const CommunityPartner = ({
  title,
  subtitle,
  btnTitle = "GET INVOLVED",
  titleStyles = {},
  containerStyles = {},
  route = '/'
}) => {
    const { isMobile } = useWindowDimensions();
    let history = useHistory();

    return (
    <div className={'community-partner-container-wrapper'}>
        <div className={"community-partner-container"} style={containerStyles}>
            <div className={"community-partner-info-container"}>
                <Text
                    // size={'2.45vw'}
                    size={30}
                    type={"kLight"}
                    // type={"thin"}
                    animationType={"fade-in"}
                    // mobSize={25}
                    containerStyles={{ marginBottom: 31 }}
                    textStyles={{
                        whiteSpace: "break-spaces",
                        ...titleStyles,
                        // lineHeight:  "55px",
                        lineHeight: "35px",
                    }}
                >
                    {title}
                </Text>
                <Text
                    className={"community-partner-subtitle"}
                    // size={'1.15vw'}
                    size={18}
                    animationType={"fade-in"}
                    // mobSize={16}
                    textStyles={{ lineHeight: isMobile? '28px':  "29px", fontWeight: 300 }}
                    // textStyles={{ lineHeight: "28px" }}
                    type={"kLight"}
                    // type={"light"}
                >
                    {subtitle}
                </Text>
            </div>

            <div className={"community-partner-btn-container"}>
                <Button
                    title={btnTitle}
                    // size={".8vw"}
                    size={14}
                    mobSize={10}
                    className={"community-partner-btn"}
                    onClick={() => history.push(route)}
                />
            </div>
        </div>
    </div>
  );
};

export default CommunityPartner;
