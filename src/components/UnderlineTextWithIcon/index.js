import React from "react";
import SubmitYourResume from "../SubmitYourResume";
import ArrowUpRight from "../../images/arrow-top-right-black.png";
import "./index.scss";

const UnderlineTextWithIcon = ({
  className = "",
  onClick,
  title = "",
  color = "white",
  withIcon = false,
  size,
  mobSize,
}) => {
  return (
    <div className={`underline-text-container ${className}`}>
      <SubmitYourResume
        size={size}
        mobSize={mobSize}
        className={"underline-text"}
        onClick={onClick}
        title={title}
        color={color}
      />
      {withIcon ? (
        <img
          src={ArrowUpRight}
          data-aos="fade-up"
          className={"underline-text-img"}
        />
      ) : null}
    </div>
  );
};

export default UnderlineTextWithIcon;
