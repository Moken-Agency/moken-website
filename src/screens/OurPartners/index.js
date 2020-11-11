import React from "react";
import Text from "../../components/Text";
import Title from "../../components/Title";
import './index.scss';
import CommunityPartner from "../../components/CommunityPartner";
import SubmitYourResume from "../../components/SubmitYourResume";
import ArrowUpRight from '../../images/arrow-up-right.png';
import options from "./options";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const {involved, collaborates} = options;

const OurPartners = () => {

    const {isMobile} = useWindowDimensions()


    return (
       <div className={'our-partners-container'}>
           <div className={'our-partners-info-container'}>
               <Text type={'semiBold'} size={16} mobSize={14} containerStyles={{marginBottom: isMobile ? '18vw' : '1.5vw'}}>OUR PARTNERS</Text>
               <Text type={'thin'} size={75} mobSize={45} containerStyles={{marginBottom: isMobile ? '5vw' : '1vw'}}>Success fuelled by partnership.</Text>
               <Text type={'light'} size={20} mobSize={16}>Creating an unmatched global ecosystem, together.</Text>
           </div>

           <div className={'our-partners-circles'}>

           </div>

           <Title className={'partners-title'} title={'DRIVING THE FUTURE'} />

           <div className={'our-partners-second-info-container'}>
               <Text size={55}
                     mobSize={35}
                     type={'extraLight'}>We increase website leads, maximize revenu and produce a
                   positive ROI — validated with measurable results.</Text>
               <div className={'our-partners-inline-info'}>
                   <Text type={'light'} size={20} mobSize={16}>Our capabilities span the breadth of operations, project, and product
                       management; business strategy; marketing; design; technology; revenue optimization;
                       talent acquisition; growth; and sales, across all industries through customized products,
                       services, courses, workshops, solutions, and mentorship.</Text>
                   <Text type={'light'} size={20} mobSize={16}>We partner with innovators through our tailored and integrative expertise, complemented by a
                       vibrant ecosystem of game-changing partners to deliver accelerated, superior, and impactfully
                       driven outcomes.</Text>
               </div>
           </div>

           <Title className={'partners-title'} title={'PARTNERSHIP OPPORTUNITIES'} />

           <div className={'our-partners-second-info-container'}>
               <Text size={55} mobSize={35} type={'extraLight'}>Join our trusted community of partners and market what you do to founders and startups, globally.</Text>
           </div>

           <div className={'comm-manager-container'}>
               {
                   involved.map((props, index) => {
                       return (
                          <CommunityPartner {...props} key={CommunityPartner + index} />
                       )
                   })
               }
           </div>

           <div>
               <SubmitYourResume title={'Expert Directory Coming Soon'} />
           </div>

           <Title className={'partners-title'} title={'OUR PARTNERS'} />

           <div className={'partners-increase-container'}>
               <Text type={'extraLight'} size={55} mobSize={35}>We increase website leads, maximize revenu and produce a positive
                   ROI — validated with measurable results.</Text>
               <div className={'partners-container'}>
                   {
                       ['','','','','','','','','', '', '', '', '', '', '', '', '', '',].map((_, index) => {
                           return (
                               <div className={'grey-block'}/>
                           )
                       })
                   }
               </div>
           </div>

           <div className={'black-block-container'}>
               <Text size={30} type={'thin'} color={'white'}>Looking for the next big thing?</Text>
               <div className={'black-block-right-container'}>
                   <Text size={16}
                         type={'semiBold'}
                         color={'white'}
                         textStyles={{letterSpacing: 4}}>GET INVOLVED</Text>
                   <img src={ArrowUpRight} />
               </div>
           </div>

           <Title containerStyles={{marginTop: '10vw'}} className={'partners-title'} title={'LEVERAGE THE ECOSYSTEM'} />

           <div className={'product-testing-sub-container'}>
               <div className={'product-individual-container'}>
                   <Text className={'enthusiastic-title'}
                         type={'extraLight'} size={55} mobSize={35}>Enthusiastic individuals working together to create extraordinary startups</Text>

               </div>

               <div className={'role-container'}>
                   <Text className={'role-title'}
                         size={20}
                         type={'light'}
                         textStyles={{lineHeight: '35px'}}>Our role consists of taking the time to understand your business model, and suggesting
                       creative and high-performing digital strategies. Our avant-garde tactics are in line with
                       the current market, blend seamlessly with our clients’ operational realities, and eliminate
                       risks that aren’t necessary.</Text>

                   <Text size={14} type={'semiBold'}>HOW WE CAN COLLABORATE</Text>
                   <div className={'product-benefits-container'}>
                       {
                           collaborates.map(({title, subtitle}, index) => {
                               return (
                                   <div className={'product-benefit-container'} key={'benefits' + index}>
                                       <Text size={22} type={'semiBold'} className={'product-benefit-title'}>{title}</Text>
                                       <Text size={20} type={'light'}>{subtitle}</Text>
                                   </div>
                               )
                           })
                       }
                   </div>
                   <Text size={14} type={'semiBold'} containerStyles={{marginTop: '4vw'}}>CHOOSE YOUR PURPOSE</Text>

                   <SubmitYourResume title={'Moken Partner Program Guide'} color={'black'}/>
                   <SubmitYourResume title={'Ecosystem Partner Playbook'} color={'black'}/>
                   <SubmitYourResume title={'Community Partner Playbook'} color={'black'}/>
                   <SubmitYourResume title={'Startup Program Partner Playbook'}
                                     color={'black'}
                                     className={'last-submit-resume'}/>
               </div>
           </div>
           <EmailForm title={'Stay in the loop & never miss a thing.'}
                      withForm width={'20vw'}
                      className={'partners-email-form'}/>

       </div>
   )
}

export default OurPartners
