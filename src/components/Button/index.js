import React, {useState} from "react";
import "./index.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Text from "../Text";
import colors from "../../constans/colors";
//type = borderd | unbordered | transparent | innovation
import textTypes from "../../constans/text-types";

//color = orange-bordered | coral | blue | black | white

//animationType = defaultAnimation | lowerMenu
const Button = ({
  type = "black",
  backgroundColor = "black",
  textColor = "white",
  title = "",
  containerStyles = {},
  additionalComponent,
  onClick = () => {},
  borderType = "default",
  size = 14,
  mobSize = 12,
  className = "",
  textType = "kRegular",
  disabled = false,
    isComingSoon = false,
    animationHoverType = 'defaultAnimation'
}) => {

  const [isHover, setIsHover] = useState(false);
  const bordersStyles = {
    bordered: {
      border: `1px solid ${colors[textColor]}`,
    },
    borderedBlack: {
        border: `1px solid white`,
        backgroundColor: 'black'
    },
    borderedWhite: {
      border: `1px solid black`,
      backgroundColor: 'white'
    },
    borderBottom: {
      border: 0,
      borderBottom: `1px solid ${colors[textColor]}`,
    },
    default: {
      border: `1px solid ${colors[backgroundColor]}`,
    },
  };

  const textStyles = {
    innovation: {
      letterSpacing: 0
    },
    default: {
      letterSpacing: 4
    }
  }

  const handleOnClick = () => {
   return  disabled || isComingSoon ? null : onClick()
  }

  return (
      <button
          onClick={handleOnClick}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          disabled={disabled}
          style={{
            // ...bordersStyles[borderType],
            ...containerStyles,
            // backgroundColor: colors[backgroundColor],
            cursor: isComingSoon ? 'not-allowed' : 'pointer'
          }}
            className={`${className} ${disabled ? 'disabled' : ' '}
             ${animationHoverType + 'Container'} button-main-container ${type}`}
      >
        <div
            className={`button-container`}
        >
          <Text
              className={`button-text ${animationHoverType + 'Text'}`}
              color={colors[textColor]}
              size={size}
              mobSize={mobSize}
              containerStyles={{ justifyContent: "center",  }}
              textStyles={{ whiteSpace: "nowrap", ...textStyles[type] }}
              type={textType}
          >
              {isHover && isComingSoon ? "COMING SOON" : title}
          </Text>
          {additionalComponent ? additionalComponent() : null}
        </div>
        {type === 'lowerMenu' ? <div className={'lowerMenuBorder'}/> : null}
      </button>
  );
};

export default Button;
