import React, {useMemo} from "react";
import {useHistory, useLocation} from "react-router-dom";
import LogoSVG from "../../images/moken.svg";
import './index.scss';
import options from "./options";
import {useDynamicColour} from "../../hooks/useDynamicGrouColour";


const Logo = ({className = ''}) => {
    let history = useHistory();

    const {dynamicColour} = useDynamicColour();

    return (
        <div className={`${className}`}>
            <div className={'logo-container'}>
                <img
                    src={LogoSVG}
                    className={"logo"}
                    onClick={() => history.push("/")}
                />
                <div className={'logo-circle'}
                     style={{backgroundColor: dynamicColour}}
                />
            </div>

        </div>
    )
}

export default Logo
