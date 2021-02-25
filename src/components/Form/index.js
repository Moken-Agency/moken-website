import Popup from "reactjs-popup";
import React from "react";
import "./index.scss";
import "reactjs-popup/dist/index.css";
import Text from "../Text";
import Button from "../Button";
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const Form = ({ backgroundColor = "#ff7d3e", formName = "Test", isOpen }) => {
    return (
    <div className={"form-container"}>
      <Modal isOpen={isOpen} className="Modal" customStyles={customStyles}>
      {/*<Popup trigger={<button className={""}>{"Form"}</button>} modal nested>*/}
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
                type={"kSemiBold"}
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
                  type={"kSemiBold"}
                  textStyles={{ letterSpacing: 4 }}
                >
                  google form here
                </Text>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Form;
