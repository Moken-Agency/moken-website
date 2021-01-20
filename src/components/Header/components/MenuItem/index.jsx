import React, { useState } from "react";
import "./index.scss";
import SubMenuItem from "../SubMenuItem";
import Text from "../../../Text";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { useHistory } from "react-router-dom";

const MenuItem = ({
  containerStyles = {},
  textStyles = {},
  title,
  withDivider,
  subRouts = [],
  dividerColor = "grey",
  onClick = () => {},
  route = "",
  size = 11,
  className = "",
}) => {
  const [hover, setHover] = useState({ isHover: true, color: "#000" });
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { isMobile } = useWindowDimensions();
  let history = useHistory();
  const onMouseEnter = () => {
    if (!isMobile) {
      setHover({ isHover: true, color: dividerColor });
    }
  };
  const onMouseLeave = () => {
    if (!isMobile) {
      setHover({ isHover: true, color: "#000" });
    }
  };

  const handleOnClick = () => {
    console.log("handleOnClick");
    if (!subRouts.length) {
      history.push(route);
    } else {
      onClick();
    }
  };
  return (
    <div
      className={`menu-main-container ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleOnClick}
    >
      <div className={"menu-item-container"} style={containerStyles}>
        <Text
          type={"semiBold"}
          size={size}
          textStyles={{
            ...textStyles,
            color: "#000",
          }}
        >
          {title.toUpperCase()}
        </Text>
        {withDivider && <div className={"divider"} />}
      </div>
      {subRouts.length ? (
        <div
          className={"sub-routs"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {subRouts.map(({ title = "", route = "" }, index) => {
            return (
              <SubMenuItem
                key={"sub routs" + index}
                title={title}
                dividerColor={dividerColor}
                route={route}
                setHoveredIndex={setHoveredIndex}
                hoveredIndex={hoveredIndex}
                index={index}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default MenuItem;
