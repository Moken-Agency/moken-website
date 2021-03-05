import React from "react";
import './index.scss';
import partners from "../../images/partners";
const partnersList  =  [partners.noissue, partners.owner, partners.segment, partners.hubspot, partners.acadium]

const PartnersList = ({list = partnersList}) => {
    return (
        <div className={'small-partners-list'}>
            {
                list.map((partner, index) => {
                    return (
                        <img src={partner} key={'ecopartners partner' + index} />
                    )
                })
            }
        </div>
    )
}

export default PartnersList
