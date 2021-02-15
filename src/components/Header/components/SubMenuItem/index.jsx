import React, {useMemo} from "react";
import "./index.scss";
import Text from "../../../Text";
import { useHistory } from "react-router-dom";

const SubMenuItem = ({ title = "", dividerColor = "#000", route, setHoveredIndex = () => {}, hoveredIndex, index }) => {
  let history = useHistory();


  const returnTextColor = useMemo(() => {
    return hoveredIndex === null ? '#000' : hoveredIndex === index ? 'rgba(0,0,0,.15)' : '#b2b2b2';
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
        <Text
          size={14}
          textStyles={{
            letterSpacing: 3,
            textAlign: "initial",
            whiteSpace: "pre",
          }}
          containerStyles={{ alignItems: "flex-start" }}
          type={"semiBold"}
          color={returnTextColor}
        >
          {title.toUpperCase()}
        </Text>
      </div>
    </button>
  );
};

export default SubMenuItem;
