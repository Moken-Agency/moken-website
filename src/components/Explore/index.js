import React from "react";
import Text from "../Text";
import Button from "../Button";
import "./index.scss";
import { useHistory } from "react-router-dom";

const Explore = ({ title, subtitle, description, componentIndex, route = "", setIsActiveIndex = () => {},isActiveIndex = false}) => {
  const history = useHistory();

  return (
      <div className={`explore-container-wrapper ${isActiveIndex ? 'explore-container-active-wrapper' : ''}`}
           onMouseEnter={() => setIsActiveIndex(componentIndex)}
           onMouseLeave={() => setIsActiveIndex(0)}
      >
          <div className={`explore-container`}>
          {/*<div className={`explore-container ${isActive ? 'explore-active-container' : ''}`}>*/}
           <div>
               <Text
                   size={14}
                   mobSize={10}
                   animationType={"fade-in"}
                   type={"kMedium"}
                   textStyles={{letterSpacing: 4}}
               >
                   {title}
               </Text>
               <Text
                   size={30}
                   mobSize={22}
                   animationType={"fade-in"}
                   type={"kLight"}
                   className={"explore-subtitle"}
               >
                   {subtitle}
               </Text>
               <div className={"explore-divider"} />
               <Text type={"kRegular"} mobSize={10} animationType={"fade-in"} className={'explore-description'} size={14}>
                   {description}
               </Text>
           </div>
              <Button
                  title={"EXPLORE"}
                  onClick={() => history.push(route)}
                  size={10}
                  animationType={"fade-in"}
                  mobSize={8}
                  type={'lowerMenu'}
                  className={"explore-btn"}
                  // animationHoverType={'lowerMenu'}
                  containerStyles={{maxWidth: 75}}
              />
          </div>
      </div>

  );
};
export default Explore;
