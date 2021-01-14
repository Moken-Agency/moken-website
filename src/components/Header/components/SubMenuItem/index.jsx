import React, {useMemo, useState} from "react";
import "./index.scss";
import Text from "../../../Text";
import { useHistory } from "react-router-dom";

const SubMenuItem = ({ title = "", dividerColor = "#000", route, setHoveredIndex = () => {}, hoveredIndex, index }) => {
  let history = useHistory();


  const returnTextColor = useMemo(() => {
    return hoveredIndex === null ? '#000' : hoveredIndex === index ? 'rgba(0,0,0,.15)' : 'grey';
  }, [hoveredIndex, hoveredIndex])


  return (
    <button
      className={"sub-menu-item-container"}
      onClick={() => history.push(route)}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div
        className={"sub-menu-divider"}
        style={{ backgroundColor: dividerColor }}
      />
      <div>
        {/*<div className={'sub-menu-divider'}/>*/}
        <Text
          size={".8vw"}
          textStyles={{
            letterSpacing: 2,
            textAlign: "initial",
            whiteSpace: "pre",
            // color: hoveredIndex !== null && hoveredIndex !== index ? 'rgba(0,0,0,.15)' : 'black'
          }}
          containerStyles={{ alignItems: "flex-start" }}
          type={"semiBold"}
          color={returnTextColor}
        >
          {title.toUpperCase()}
        </Text>
        {/*<Text size={'.8vw'} textStyles={{letterSpacing: 3}} type={'semiBold'} color={'grey'}>{title.toUpperCase()}</Text>*/}
      </div>
    </button>
  );
};

export default SubMenuItem;
