import Text from "../../../../components/Text";
import options from "../../MokenLabs/options";
import CommunityPartner from "../../../../components/CommunityPartner";
import SubmitYourResume from "../../../../components/SubmitYourResume";
import React from "react";
import './index.scss';
import Title from "../../../../components/Title";

const ProgramCommunityListPartner = ({title, subtitle, options, onClick = () => {}}) => {
   return (
       <>
           <Title title={title} className={'labs-join-title'} />

           <section className={'labs-join-container'}>
               <Text type={'extraLight'} size={55} mobSize={35} textStyles={{letterSpacing: 0.5}}>{subtitle}</Text>

               <div className={'labs-join-partners-list'}>
                   {
                       options.map((option) => {
                           return (
                               <CommunityPartner {...option} containerStyles={{width:60 / options.length + 'vw'}}/>
                           )
                       })
                   }
               </div>

               <div className={'labs-join-schedule-container'} >
                   <SubmitYourResume title={'See your schedule'} color={'black'} onClick={onClick}/>
               </div>
            </section>
       </>
   )
}

export default ProgramCommunityListPartner
