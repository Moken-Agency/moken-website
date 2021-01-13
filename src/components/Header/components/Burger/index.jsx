import React from "react";
import "./index.scss";
import Cross from "../../../../images/cross.png";
import CrossWhite from "../../../../images/cross-white.png";

const Burger = ({ isOpen, setIsOpen, type = "black" }) => {
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      className={"burger-container"}
      style={{ backgroundColor: type === "black" ? "white" : "black" }}
      onClick={handleOpenMenu}
    >
      {isOpen ? (
        <img
          src={type === "white" ? CrossWhite : Cross}
          className={"cross-icon"}
        />
      ) : (
        <>
          <div style={{ backgroundColor: type }} />
          <div style={{ backgroundColor: type }} />
          <div style={{ backgroundColor: type }} />
        </>
      )}
    </button>
  );
};

export default Burger;
