import React from "react";
import './index.scss'

const Burger = ({isOpen, setIsOpen}) => {
    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <button className={'burger-container'} onClick={handleOpenMenu}>
            <div/>
            <div/>
            <div/>
        </button>
    )
}

export default Burger
