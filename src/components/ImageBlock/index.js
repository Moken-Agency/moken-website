import React from "react";
import './index.scss';

const positions = {
    left: 'flex-start',
    right: 'flex-end'
}

const ImageBlock = ({url = '', position = 'left', className = ''}) => {
    return (
        <div className={`image-block-container ${className}`} style={{justifyContent: positions[position] }}>
            <img src={url} />
        </div>
    )
}
export default ImageBlock
