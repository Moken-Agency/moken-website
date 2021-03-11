import React, {useMemo} from "react";
import "./index.scss";
import Text from "../../../Text";
import { useHistory } from "react-router-dom";

const SubMenuItem = ({ title = "", dividerColor = "#000", route, setHoveredIndex = () => {}, hoveredIndex, index, link ='', isComingSoon }) => {
  let history = useHistory();


  const returnTextColor = useMemo(() => {
    return hoveredIndex === null ? '#000' : hoveredIndex === index ? 'rgba(0,0,0,.15)' : '#b2b2b2';
  }, [hoveredIndex, hoveredIndex])

  const handleOnClick = () => {
    if(!isComingSoon) {
      link ? window.open(link, '_blank') : history.push(route)

    }
  }

    return (
    <button
      className={"sub-menu-item-container"}
      onClick={handleOnClick}
      style={{cursor: isComingSoon ? 'not-allowed' : 'pointer'}}
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
          type={"kSemiBold"}
          color={returnTextColor}
        >
          {hoveredIndex === index && isComingSoon ? 'COMING SOON' : title.toUpperCase()}
        </Text>
      </div>
    </button>
  );
};

export default SubMenuItem;
