import React from "react";
import Text from "../Text";
import Button from "../Button";
import "./index.scss";
import { useHistory } from "react-router-dom";

const Explore = ({ title, subtitle, description, route = "", isActive}) => {
  const history = useHistory();

  return (
      <div className={'explore-container-wrapper'}>
          <div className={`explore-container`}>
          {/*<div className={`explore-container ${isActive ? 'explore-active-container' : ''}`}>*/}
              <Text
                  size={14}
                  mobSize={10}
                  animationType={"fade-in"}
                  type={"kSemiBold"}
                  textStyles={{letterSpacing: 4}}
              >
                  {title}
              </Text>
              <Text
                  size={28}
                  mobSize={22}
                  animationType={"fade-in"}
                  type={"kThin"}
                  className={"explore-subtitle"}
              >
                  {subtitle}
              </Text>
              <div className={"explore-divider"} />
              <Text type={"kLight"} mobSize={10} animationType={"fade-in"} size={16}>
                  {description}
              </Text>
              <Button
                  title={"EXPLORE"}
                  backgroundColor={"transparent"}
                  onClick={() => history.push(route)}
                  textColor={"black"}
                  size={10}
                  animationType={"fade-in"}
                  mobSize={8}
                  className={"explore-btn"}
              />
          </div>
      </div>

  );
};
export default Explore;
