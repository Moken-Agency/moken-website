import React, {useMemo} from "react";
import "./styles.scss";
import textTypes from "../../constans/text-types";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CountUp, {useCountUp} from "react-countup";

const Text = ({
  children = "",
  textStyles = {},
  containerStyles = {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onClick = () => {},
  type = "kMedium",
  size = 12,
  mobSize = size,
  className = "",
  color = "black",
  mobColor = color,
  animationType = "",
  withCountAnimation = false,
    countAnimationProps = {}
}) => {
  const { countUp } = useCountUp({ end: children, duration: 1.4, ...countAnimationProps, });

  const handleOnMouseEnter = () => {
    onMouseEnter();
  };
  const handleOnMouseLeave = () => {
    onMouseLeave();
  };
  const { isMobile } = useWindowDimensions();
  // const TextToRender = useMemo(() => (<span></span> ? '' : CountUp), [
  //   withCountAnimation,
  // ]);

  return (
    <div
      className={`text-container ${className}`}
      style={containerStyles}
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
      onClick={onClick}
      // data-aos={animationType}
    >
      {/*{*/}
      {/*  withCountAnimation ?*/}
      {/*      <CountUp {...countAnimationProps}*/}
      {/*             style={{*/}
      {/*              fontFamily: `${textTypes[type]}, sans-serif`,*/}
      {/*              fontSize: isMobile ? mobSize : size,*/}
      {/*              color: isMobile ? mobColor : color,*/}
      {/*              ...textStyles,*/}
      {/*            }}*/}
      {/*            className={"text"}> {children}</CountUp> :*/}
            <span
                style={{
                  fontFamily: `${textTypes[type]}, sans-serif`,
                  fontSize: isMobile ? mobSize : size,
                  color: isMobile ? mobColor : color,
                  ...textStyles,
                }}
                className={"text"}
            >
            {withCountAnimation ?  countUp : children}
          </span>
      {/*}*/}

    </div>
  );
};

export default Text;
