import React from 'react';
import Text from '../../../Text';
import './index.scss';

const ColorBlack = ({colorTitle = '', colorBlock = '', colorSubtitle = ''}) => {
    return (
       <>
           {
               colorBlock ?  <div className={'color-block-container'} style={{backgroundColor: colorBlock}}>
                   <Text size={55} type={'extraLight'} containerStyles={{width: '38vw'}}>{colorTitle}</Text>
                   <Text size={16} type={'semiBold'}>{colorSubtitle}</Text>
               </div> : null
           }
       </>
    )
}

export default ColorBlack
