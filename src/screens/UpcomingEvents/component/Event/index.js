import React from "react";
import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import "./index.scss";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const Event = ({action = () => {}, subtitle = '', title = '', description = ''}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"event-container"}>
      <div>
        <Title
          title={title}
          containerStyles={{ padding: 0, whiteSpace: "nowrap" }}
        />
      </div>
      <div style={{width: '100%'}}>
        <div
          style={{
            padding: isMobile ? "" : "40px 250px 90px 204px",
            marginBottom: isMobile ? 90 : 0,
          }}
        >
          <Text
            size={50}
            mobSize={35}
            animationType={"fade-in"}
            type={"kBold"}
            containerStyles={{ marginBottom: isMobile ? 44 : "2vw" }}
          >
            {subtitle}
          </Text>
          <Text
            size={20}
            animationType={"fade-in"}
            type={"kLight"}
            mobSize={16}
            textStyles={{ lineHeight: isMobile ? "24px" : "30px" }}
            className={'event-description'}
          >
            {description}
          </Text>
        </div>

        <div className={"events-button-container"}>
          {/*<Button*/}
          {/*  title={"LEARN MORE"}*/}
          {/*  backgroundColor={"white"}*/}
          {/*  textColor={"black"}*/}
          {/*/>*/}
          <Button
            title={"ATTEND EVENT"}
            containerStyles={{ padding: "31px 35px" }}
            onClick={action}
          />
        </div>
      </div>
    </div>
  );
};
export default Event;
