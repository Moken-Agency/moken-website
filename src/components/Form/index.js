import Popup from "reactjs-popup";
import React from "react";
import "./index.scss";
import "reactjs-popup/dist/index.css";
import Text from "../Text";
import Button from "../Button";

const Form = ({ backgroundColor = "#ff7d3e", formName = "Test" }) => {
  return (
    <div className={"form-container"}>
      <Popup trigger={<button className={""}>{"Form"}</button>} modal nested>
        {(close) => (
          <div>
            <Button
              type={"transparent"}
              textColor={"white"}
              backgroundColor={"black"}
              className={"form-close"}
              title={"CLOSE"}
              size={16}
              onClick={close}
            />
            <div className={"form-header"} style={{ backgroundColor }}>
              <Text
                className={"form-name-title"}
                color={"white"}
                animationType={"fade-in"}
                type={"semiBold"}
                size={16}
              >
                {formName}
              </Text>
            </div>
            <div className={"form-content"}>
              <div className={"form-content-border"}>
                <Text
                  size={16}
                  animationType={"fade-in"}
                  type={"semiBold"}
                  textStyles={{ letterSpacing: 4 }}
                >
                  google form here
                </Text>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Form;
