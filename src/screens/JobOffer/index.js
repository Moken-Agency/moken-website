import React from "react";
import PageGenerator from "../../components/PageGenerator";
import options from './options';

const JobOffer = ({match}) => {
    const id = match.params.id;
    return <PageGenerator data={options[id]} containerStyles={{ paddingBottom: '12vw'}}/>
};

export default JobOffer;
