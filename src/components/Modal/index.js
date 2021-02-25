import React from "react";
import Popup from "reactjs-popup";
import Button from "../Button";
import "./index.scss";
import "reactjs-popup/dist/index.css";

const Modal = ({ children, buttonTitle = "", buttonClassName = "" }) => {
  return (
    <Popup
      trigger={<button className={buttonClassName}>{buttonTitle}</button>}
      modal
      nested
    >
      {(close) => (
        <div>
          <div className={"modal-btn-container"}>
            <Button
              title={"CLOSE"}
              size={"1.1vw"}
              containerStyles={{ padding: "2vw", letterSpacing: 4 }}
              type={"kSemiBold"}
              onClick={close}
              color={"white"}
            />
          </div>
          {children}
        </div>
      )}
    </Popup>
  );
};

export default Modal;
