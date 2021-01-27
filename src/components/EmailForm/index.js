import React from "react";
import Input from "../Input";
import Text from "../Text";
import "./index.scss";
import Button from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const EmailForm = ({
  title = "Stay in the loop & never miss a thing.",
  width = "20vw",
  value = "",
  className = "",
  withForm,
}) => {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      {withForm ? (
        <div className={`email-form-container ${className}`}>
          <div data-aos="fade-in" className={"email-form-divider"} />
          <Text
            containerStyles={{ margin: isMobile ? "4vw 0" : "5vw 0" }}
            size={isMobile ? "5vw" : '2vw'}
            animationType={"fade-in"}
            type={"thin"}
            textStyles={{ letterSpacing: 0.3 }}
          >
            {title}
          </Text>
          <div className={"email-form-form"}>
            <Input
              value={value}
              placeholder={"Your Email Address"}
              size={'1.25vw'}
                // size={20}
              mobSize={16}
              width={width}
              containerStyles={{width: isMobile ? '100%': '20vw'}}
            />
            <Button
              size={'.9vw'}
              // size={14}
              mobSize={12}
              title={"SUBSCRIBE"}
              textColor={"black"}
              borderType={"bordered"}
              backgroundColor={"white"}
              containerStyles={{ padding: "0 25px" }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EmailForm;
