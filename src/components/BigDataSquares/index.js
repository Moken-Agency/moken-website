import Text from "../Text";
import Button from "../Button";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './index.scss';
import {useHistory} from "react-router-dom";

const BigDataSquares = ({ title, subtitle, btnTitle = "GET INVOLVED", route = '/' }) => {
  const { isMobile } = useWindowDimensions();
  let history = useHistory();

  return (
    <div className={'big-data-squares-container'}>
      <div
          className={'big-data-squares'}
          // style={{
          //   width: isMobile ? "auto" : '28vw',
          //   height: isMobile ? "auto" : '28vw',
          //   padding: isMobile ? "35px 0 0 35px" : "2.2vw 0 0 4vw",
          //   border: "1px solid #dadada",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "space-between",
          //   marginBottom: isMobile ? 100 : '8vw',
          // }}
      >
        <Text
            size={55}
            // size={'3.4vw'}
            type={"kBold"}
            mobSize={25}
            containerStyles={{marginRight: '2vw'}}
            textStyles={{ lineHeight: isMobile ? "24px" : "65px" }}
        >
          {title}
        </Text>
        <Text
            size={20}
            type={"kLight"}
            mobSize={16}
            textStyles={{ lineHeight: isMobile ? "25px" : "35px" }}
            className={'big-data-squares-subtitle'}
            // containerStyles={{
            //   width: isMobile ? "auto" : '18vw',
            //   marginBottom: isMobile ? 44 : 0,
            //   marginTop: isMobile ? 22 : 0,
            // }}
        >
          {subtitle}
        </Text>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
              title={btnTitle}
              backgroundColor={"black"}
              textColor={"white"}
              mobSize={10}
              onClick={() => history.push(route)}

              // containerStyles={{ padding: isMobile ? "23px 16px" : "35px 32px" }}
              // size={14}
          />
        </div>
      </div>
    </div>
  );
};

export default BigDataSquares;
