import React from "react";
import SubmitYourResume from "../SubmitYourResume";
import ArrowUpRight from '../../images/arrow-up-right.png';
import './index.scss';


const UnderlineTextWithIcon = ({className = '', onClick, title = '', color = 'white', withIcon = false}) => {
    return (
        <div className={`underline-text-container ${className}`}>
           <SubmitYourResume className={'underline-text'} onClick={onClick} title={title} color={color} />
            {withIcon ? <img src={ArrowUpRight} className={'underline-text-img'}/> : null}
        </div>
    )
}

export default UnderlineTextWithIcon
