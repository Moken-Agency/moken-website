import React from "react";
import Button from "../../components/Button";

const InnovationCommittee = () => {
    return (
        <div>
            <Button title={'Join the Committee'} type={'innovation'} color={'orange-bordered'}/>
            <Button title={'Request More Info'} type={'innovation'} color={'orange'}/>
            <Button title={'Coming 2022'} type={'innovation'} color={'blue'}/>
        </div>
    )
}

export default InnovationCommittee
