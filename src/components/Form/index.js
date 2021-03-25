import Popup from "reactjs-popup";
import React from "react";
import "./index.scss";
import "reactjs-popup/dist/index.css";
import Text from "../Text";
import Button from "../Button";
import Modal from 'react-modal';
import {useDynamicColour} from "../../hooks/useDynamicGrouColour";

// const customStyles = {
//     content : {
//         top                   : '50%',
//         left                  : '50%',
//         right                 : 'auto',
//         bottom                : 'auto',
//         marginRight           : '-50%',
//         transform             : 'translate(-50%, -50%)'
//     }
// };

const Form = ({ backgroundColor = "", formName = "Form", isOpen, children, setIsOpen }) => {
    // #ff7d3e
    const {dynamicColour} = useDynamicColour();

    return (
    <div className={"form-container"}>
      <Modal isOpen={isOpen} className="form-modal" style={{container: {
              backgroundColor: 'rgba(0, 0, 0, .5)'
          }}}>
      {/*<Popup trigger={<button className={""}>{"Form"}</button>} modal nested>*/}
          <div className={'form-modal-content-container'}>
            <button
              type={"transparent"}
              className={"form-close"}
              onClick={() => setIsOpen(false)}
            >CLOSE</button>
            <div className={"form-header"} style={{ backgroundColor: backgroundColor ? backgroundColor : dynamicColour }}>
              <Text
                className={"form-name-title"}
                color={"white"}
                animationType={"fade-in"}
                type={"kSemiBold"}
                size={16}
              >
                {formName.toUpperCase()}
              </Text>
            </div>
            <div className={"form-content"}>
              <div className={"form-content-border"}>
                {/*<Text*/}
                {/*  size={16}*/}
                {/*  animationType={"fade-in"}*/}
                {/*  type={"kSemiBold"}*/}
                {/*  textStyles={{ letterSpacing: 4 }}*/}
                {/*>*/}
                {/*    */}
                {/*</Text>*/}
                  {children}
              </div>
            </div>
          </div>
      </Modal>
    </div>
  );
};

export default Form;
