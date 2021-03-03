import React, {useState} from "react";
import SubmitYourResume from "../SubmitYourResume";
import {ReactComponent as ArrowUpRight} from "../../images/arrow-up-right.svg";
import Text from '../Text';
import "./index.scss";

const hoverOptions =  [
  {
    hoverColour: '#FDCDC6',
    colourClassName: 'light-coral'
  },
  {
    hoverColour: '#D5D5D5',
    colourClassName: 'grey'


  },
  {
    hoverColour: '#FF9D72',
    colourClassName: 'coral'


  },
  {
    hoverColour: '#EFB95E',
    colourClassName: 'orange'
  },
];

const UnderlineTextWithIcon = ({
  className = "",
  onClick,
  title = "",
  color = "white",
  withIcon = false,
  size,
  mobSize,
  hoverIndex = 0
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
             className={`underline-text`}
             onClick={onClick}
             title={title}
             color={color}>
        {title}
      </Text>
      <div className={'underline-text-divider-container'}>
        <div className={`underline-text-divider`}/>
        <div className={`underline-text-divider-active`} style={{backgroundColor: hoverOptions[hoverIndex].hoverColour}}/>
        {/*<div className={`underline-text-divider-third ${borderStatus === 'unHovered' ? 'active' : ''}`}/>*/}
      </div>

    </div>

    {withIcon ? (
        <ArrowUpRight
                      // style={{fill: hoverOptions[hoverIndex].hoverColour, stroke: hoverOptions[hoverIndex].hoverColour}}
                      className={`underline-text-img  arrow-${hoverOptions[hoverIndex].colourClassName}`} />
    ) : null}
  </div>
  );
};

export default UnderlineTextWithIcon;
