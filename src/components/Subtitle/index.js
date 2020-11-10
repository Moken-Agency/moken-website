import React from 'react';
import Text from '../Text'
import './index.scss';

const Subtitle = ({subtitle = '', className = '', size = 55, mobSize = size, color = 'black', type ='extraLight' }) => {
    return (
        <>
            {
                subtitle ?  <div className={`subtitle-comp-container ${className}`}>
                    {
                        subtitle ? <Text size={size} color={color} mobSize={mobSize} type={type}>{subtitle}</Text> : null
                    }
                </div> : null
            }

        </>
    )
}

export default Subtitle
