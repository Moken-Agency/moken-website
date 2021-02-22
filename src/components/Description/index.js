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
                       textStyles = {}
}) => {
  return (
    <>
      {description.length ? (
        <div className={`description-container ${className}`}>
          {description.map(({ title, containerStyles = [], withDash = false }, index) => {
            return (
            <div style={{marginBottom: withoutMargin ? 0 : "1.7vw",
              alignItems: 'flex-start',
              display: "flex",
              ...containerStyles}}>
              {withDash? <div data-aos="fade-in" style={{width: '2vw', height: 1, backgroundColor: 'black', marginTop: 17,  marginRight: 16}}/> : null}
              <Text
                animationType={"fade-in"}
                size={size}
                mobSize={mobSize}
                key={title + index}
                type={type}
                textStyles={{ lineHeight: "35px", ...textStyles }}
                containerStyles={{
                  marginBottom: 0,
                  width: "100%"
                }}
                color={color}
              >
                {title}
              </Text>
            </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default Description;
