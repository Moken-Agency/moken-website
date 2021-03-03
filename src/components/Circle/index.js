import React from "react";
import './index.scss';

const Circle = () => {
    return (
        <figure className="chart" data-percent="75">
            {/*<svg width="200" height="200">*/}
            {/*    <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>*/}
            {/*</svg>*/}
            <svg width="460" height="460">
                <circle className="outer" cx="-20" cy="230" r="200" transform="rotate(-90, 100, 105)"/>
            </svg>
        </figure>
    )
}

export default Circle
