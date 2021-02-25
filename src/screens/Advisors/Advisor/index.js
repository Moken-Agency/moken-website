import React, {useEffect, useState} from "react";
import './index.scss';
import Text from "../../../components/Text";
import Social from './Social'
import AdvisorModal from "./AdvisorModal";
import Modal from "react-modal";

const Advisor = ({name = 'Mentor Name', title = 'MENTOR TITLE', socialLinks = [], ...rest}) => {
    const [isOpen, setIsOpen] = useState(false);


  return (
      <>

  <AdvisorModal isOpen={isOpen} close={() => setIsOpen(false)} advisorInfo={{...rest, name, title, socialLinks}}/>

  <div className={"advisor-container"} onClick={() =>setIsOpen(!isOpen)}>
      <img src={rest.avatar} />
      <div className={'advisor-info-container'} >
            <Text type={'thin'} size={30} color={'white'} className={'advisor-name'}>{name}</Text>
            <Text type={'kSemiBold'} size={14} color={'white'} className={'advisor-title'}>{title}</Text>
          <div className={'advisor-social-links-list'}>
              {
                  socialLinks.map((socialLink, index) => {
                      return (
                          <Social {...socialLink} key={index + name + ' advisor social'}/>
                      )
                  })
              }
          </div>
      </div>
    </div>
          </>
  );
};

export default Advisor;
