import React from "react";
import Text from "../Text";
import "./index.scss";

const Description = ({
  description = [],
  color,
  className = "",
  size = 12,
  mobSize = size,
  type = "light",
  withoutMargin = false,
}) => {
  return (
    <>
      {description.length ? (
        <div className={`description-container ${className}`}>
          {description.map(({ title, containerStyles = [] }, index) => {
            return (
              <Text
                animationType={"fade-in"}
                size={size}
                mobSize={mobSize}
                key={title + index}
                type={type}
                textStyles={{ lineHeight: "35px" }}
                containerStyles={{
                  marginBottom: withoutMargin ? 0 : "1.7vw",
                  ...containerStyles,
                }}
                color={color}
              >
                {title}
              </Text>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default Description;
