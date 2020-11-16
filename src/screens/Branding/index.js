import React from "react";
import CommunityPageGenerator from "../../components/CommunityPageGenerator";
import options from "./options";

const Branding = () => {
    return (
        <div>
            <CommunityPageGenerator {...options}/>
        </div>
    )
}

export default Branding
