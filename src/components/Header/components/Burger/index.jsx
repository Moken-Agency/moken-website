import React from "react";
import './index.scss';
import Cross from '../../../../images/cross.png';

const Burger = ({isOpen, setIsOpen}) => {
    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <button className={'burger-container'} onClick={handleOpenMenu}>
            {isOpen ? <img src={Cross} className={'cross-icon'}/> :
                <>
                <div/>
                <div/>
                <div/>
                </>
            }
        </button>
    )
}

export default Burger
