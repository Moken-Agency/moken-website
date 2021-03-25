import React from "react";
import './index.scss';
import partners from "../../images/partners";
// const partnersList  =  [partners.noissue, partners.owner, partners.segment, partners.hubspot, partners.acadium];
const partnersList = [
    {
        height: 53,
        link: 'https://noissue.co',
        imgURL: partners.noissue
    },
    {
        height: 60,
        imgURL: partners.owner,
        link: 'https://ownr.grsm.io/moken'
    },
    {
        height: 55,
        imgURL: partners.segment,
        link: 'https://segment.com/industry/startups/'
    },
    {
        height: 101,
        imgURL: partners.hubspot,
        link: 'https://www.hubspot.com/startups'
    },
    {
        height: 54,
        imgURL:  partners.acadium,
        link: 'https://acadium.com'
    }
];

const PartnersList = ({list = partnersList}) => {
    return (
        <div className={'small-partners-list'}>
            {
                list.map(({height, imgURL, link = ''}, index) => {
                    return (
                        <img src={imgURL} key={'ecopartners partner' + index}
                             style={{height}}
                             onClick={() => window.open(link, '_blank')} />
                    )
                })
            }
        </div>
    )
}

export default PartnersList
