import React from 'react';
import Text from '../Text'
import './index.scss';

const Subtitle = ({subtitle = '', className = '', size = 55, color = 'black'}) => {
    return (
        <>
            {
                subtitle ?  <div className={`subtitle-comp-container ${className}`}>
                    {
                        subtitle ? <Text size={size} color={color} type={'extraLight'}>{subtitle}</Text> : null
                    }
                </div> : null
            }

        </>
    )
}

export default Subtitle
