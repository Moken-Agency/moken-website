import React from "react";
import './index.scss';
import partners from "../../images/partners";
// const partnersList  =  [partners.noissue, partners.owner, partners.segment, partners.hubspot, partners.acadium];
const partnersList = [
        {
        imgURL: partners.noissue,
        height: 55
    },
    {
        imgURL: partners.owner,
        height: 55
    },
    {
        imgURL: partners.segment,
        height: 42
    },
    {
        imgURL:  partners.hubspot,
        height: 101
    },
    {
        imgURL: partners.acadium,
        height: 55
    },
]

const PartnersList = ({list = partnersList}) => {
    return (
        <div className={'small-partners-list'}>
            {
                list.map(({height, imgURL}, index) => {
                    return (
                        <img src={imgURL} key={'ecopartners partner' + index} style={{height}} />
                    )
                })
            }
        </div>
    )
}

export default PartnersList
