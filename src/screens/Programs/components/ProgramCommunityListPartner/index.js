import Text from "../../../../components/Text";
import CommunityPartner from "../../../../components/CommunityPartner";
import SubmitYourResume from "../../../../components/SubmitYourResume";
import React from "react";
import './index.scss';
import Title from "../../../../components/Title";

const ProgramCommunityListPartner = ({title = '', subtitle = ' ', options = [], onClick, AdditionalComponent, widthItem = 70 / options.length + 'vw' }) => {
   return (
       <>
           <Title title={title} className={'labs-join-title'} />

           <section className={'labs-join-container'}>
               <Text animationType={'fade-in'}
                     type={'extraLight'}
                     size={55}
                     mobSize={35}
                     className={'program-community-list-partner-subtitle'}
                     textStyles={{letterSpacing: 0.5}}>{subtitle}</Text>

               <div className={'labs-join-partners-list'}>
                   {
                       options.map((option) => {
                           return (
                               <CommunityPartner {...option} containerStyles={{width: widthItem}}/>
                           )
                       })
                   }
               </div>

               {onClick ? <div className={'labs-join-schedule-container'}>
                   <SubmitYourResume title={'See your schedule'} color={'black'} onClick={onClick}/>
               </div> : null}

               {AdditionalComponent ? <AdditionalComponent /> : null}
            </section>
       </>
   )
}

export default ProgramCommunityListPartner
