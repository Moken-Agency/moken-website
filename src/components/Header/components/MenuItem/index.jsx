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
  hoverColor = dividerColor,
  size = 11,
  className = "",
  isComingSoon,
    link
}) => {
  const [hover, setHover] = useState({ isHover: false, color: "#000" });
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { isMobile } = useWindowDimensions();
  let history = useHistory();
  const onMouseEnter = () => {
    if (!isMobile) {
      setHover({ isHover: true, color: dividerColor });
    }
  };
  console.log(hover, title);
  const onMouseLeave = () => {
    if (!isMobile) {
      setHover({ isHover: false, color: "#000" });
    }
  };

  const handleOnClick = () => {
    console.log("handleOnClick");
    if (!subRouts.length) {
     link ? window.open(link, '_blank') : history.push(route);
    } else {
      onClick();
    }
  };
  return (
    <div
      className={`menu-main-container ${className} ${isComingSoon && hover.isHover ? 'coming-soon' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleOnClick}
    >
      <div className={"menu-item-container"} style={containerStyles}>
        <Text
          type={"kMedium"}
          size={size}
          textStyles={{
            ...textStyles,
            color: isComingSoon && hover.isHover  ? '#b4b4b4' : !isComingSoon && hover.isHover ? hoverColor : '#000',
          }}
        >
          {isComingSoon && hover.isHover ? `Coming soon`.toUpperCase() : title.toUpperCase() }
        </Text>
        {withDivider && <div className={"divider"} />}
      </div>
      {subRouts.length ? (
        <div
          className={"sub-routs"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {subRouts.map(({ title = "", route = "", link = '', ...rest }, index) => {
            return (
              <SubMenuItem
                key={"sub routs" + index}
                link={link}
                title={title}
                dividerColor={dividerColor}
                route={route}
                setHoveredIndex={setHoveredIndex}
                hoveredIndex={hoveredIndex}
                index={index}
                {...rest}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default MenuItem;
