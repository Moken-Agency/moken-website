import React, {useState} from "react";
import SubmitYourResume from "../SubmitYourResume";
import {ReactComponent as ArrowUpRight} from "../../images/arrow-up-right-black.svg";
import Text from '../Text';
import "./index.scss";

const UnderlineTextWithIcon = ({
  className = "",
  onClick,
  title = "",
  color = "white",
  withIcon = false,
  size,
  mobSize,
  hoverColour = '',
  colourClassName = ''
}) => {

  const [borderStatus, setBorderStatus] = useState('default');
  const [isAnimationEnded, setIsAnimationEnded] = useState(true)


  const onMouseEnter = () => {
    setIsAnimationEnded(false)
    setBorderStatus('hovered')
  }

  const onMouseLeave = () => {
    setBorderStatus('unHovered')
    setTimeout(() => {
      setIsAnimationEnded(true)
      setBorderStatus('default')
    }, 500)

  }

  return (
  <div className={'underline-text-main-container'} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className={`underline-text-container ${className}`}>
      <Text  size={size}
             mobSize={mobSize}
             className={`underline-text ${colourClassName}`}
             onClick={onClick}
             title={title}
             color={color}>
        {title}
      </Text>
      <div className={'underline-text-divider-container'}>
        <div className={`underline-text-divider`}/>
        <div className={`underline-text-divider-active`} style={{backgroundColor: hoverColour}}/>
        {/*<div className={`underline-text-divider-third ${borderStatus === 'unHovered' ? 'active' : ''}`}/>*/}
      </div>

    </div>

    {withIcon ? (
        <ArrowUpRight className={`underline-text-img  arrow-${colourClassName}`} />
    ) : null}
  </div>
  );
};

export default UnderlineTextWithIcon;
