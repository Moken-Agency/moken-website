import {useMemo} from "react";
import {useLocation} from "react-router-dom";
import options from "../components/Logo/options";

export const useDynamicColour = () => {
    let {pathname} = useLocation();
    const urlObject =  options.find(({urls, color}) => {
        return urls.find((url) => {
            return url === pathname
        })
    })
    return {dynamicColour: urlObject && urlObject.color ? urlObject.color : `#c6cbe1`}
}

