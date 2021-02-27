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
  type = "default",
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
    animationHoverType = 'defaultAnimation'
}) => {
  const bordersStyles = {
    bordered: {
      border: `1px solid ${colors[textColor]}`,
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

  return (
      <button
          onClick={onClick}
          disabled={disabled}
          style={{
            ...bordersStyles[borderType],
            ...containerStyles,
            backgroundColor: colors[backgroundColor],
          }}
            className={`${type} ${className} ${disabled ? 'disabled' : ' '}
             ${animationHoverType + 'Container'} button-main-container`}>
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
            {title}
          </Text>
          {additionalComponent ? additionalComponent() : null}
        </div>
        {animationHoverType === 'lowerMenu' ? <div className={animationHoverType + 'Border'}/> : null}
      </button>
  );
};

export default Button;
