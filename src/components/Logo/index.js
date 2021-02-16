import React, {useMemo} from "react";
import {useHistory, useLocation} from "react-router-dom";
import LogoSVG from "../../images/moken.svg";
import './index.scss';
import options from "./options";

const Logo = ({className = ''}) => {
    let history = useHistory();
    let {pathname} = useLocation();
    const circleColor = useMemo(() => {
        const urlObject =  options.find(({urls, color}) => {
            return urls.find((url) => {
                return url === pathname
            })
        })
        return urlObject && urlObject.color ? urlObject.color : `#ff2a68`
    }, []);


    return (
        <div className={`logo-container ${className}`}>
            <img
                src={LogoSVG}
                className={"logo"}
                onClick={() => history.push("/")}
            />
            <div className={'logo-circle'}
                 style={{backgroundColor: circleColor}}
            />
        </div>
    )
}

export default Logo
