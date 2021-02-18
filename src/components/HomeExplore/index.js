import React from "react";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";
import {useHistory} from "react-router-dom";

const HomeExplore = ({
    title = '',
    description = '',
    mokenTitle = {
      first: '',
      second: ''
    },
    btnOptions = {
      title: '',
      click: () => {},
        route: '/'
    }
}) => {
    let history = useHistory();

    return (
    <div
      data-aos="fade-up"
      className={`home-explore-item-container`}
    >
      <Text size={28} type={'kBold'} className={'home-explore-item-title'}>{title}</Text>

      <Text type={'kLight'} size={20} className={'home-explore-item-description'}>{description}</Text>
      <div className={'home-explore-item-moken-title-container'}>
        <Text size={16} type={'kBold'} className={'home-explore-item-moken-title-first'}>{mokenTitle.first}</Text>
        <Text  size={16} type={'kLight'} className={'home-explore-item-moken-title-second'}>{mokenTitle.second}</Text>
      </div>

      <Button size={10} className={'home-explore-btn'} title={btnOptions.title} onClick={() => btnOptions.route ? history.push( btnOptions.route) : btnOptions.click}/>
    </div>
  );
};
export default HomeExplore;
