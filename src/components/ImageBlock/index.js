import React from "react";
import "./index.scss";
import SecondImage from "../../images/package-second.svg";

const positions = {
  left: "flex-start",
  right: "flex-end",
};

//type = 'side' | ' full'
//position = 'left' | ' right'

const ImageBlock = ({
  url = SecondImage,
  position = "left",
  className = "",
  type = "side",
    imgClassName=''
}) => {
  return (
    <div
      data-aos="fade-up"
      className={`image-block-container ${className}`}
      style={{ justifyContent: positions[position] }}
    >
      <img src={url} className={`${type} ${imgClassName}`} />
    </div>
  );
};
export default ImageBlock;
