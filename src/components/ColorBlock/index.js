import Text from "../Text";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";
import ArrowUpRight from "../../images/arrow-up-right-black.svg";
import ArrowUpRightWhite from "../../images/arrow-up-right-white.svg";

//blockType = middle | big
const ColorBlock = ({
  title = "",
  subtitle = "",
  backgroundColor = "",
  className = "",
  textWidth = "36vw",
  textColor = "white",
  // size = '4.06vw',
  size = 65,
  withIcon = false,
  type = "extraLight",
  mobSize = "9vw",
  blockType = "big",
  containerStyles = {},
  onClick = () => {}
}) => {
  const { isMobile } = useWindowDimensions();
  const mobSizeTemp = blockType === "middle" ? 32 : mobSize;
  const sizeTemp = blockType === "middle" ? 40 : size;
  const typeTemp = blockType === "middle" ? "thin" : type;

  return (
    <>
      {backgroundColor !== "" ? (
        <section
          data-aos="fade-up"
          className={`block-container ${className} ${blockType}`}
          style={{ ...containerStyles, backgroundColor }}
        >
          <Text
            size={sizeTemp}
            type={typeTemp}
            mobSize={mobSizeTemp}
            color={textColor}
            animationType={"fade-in"}
            className={"block-container-history"}
            containerStyles={{ width: isMobile ? "auto" : textWidth }}
          >
            {title}
          </Text>
          <div style={{ display: "flex", alignItems: "center", cursor: 'pointer' }} onClick={onClick}>
            <Text
              size={16}
              type={"semiBold"}
              mobSize={"3vw"}
              animationType={"fade-in"}
              textStyles={{ letterSpacing: isMobile ? 3 : 4 }}
              className={"block-container-connect"}
              color={textColor}
            >
              {subtitle}
            </Text>
            {withIcon ? (
              <img
                src={textColor === "black" ? ArrowUpRight : ArrowUpRightWhite}
                data-aos="fade-in"
                className={"color-block-image"}
              />
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ColorBlock;
