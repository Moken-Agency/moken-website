import React from "react";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";
import {useHistory} from "react-router-dom";

const HomeDescriptionDataComponent = ({
        containerClass = '',
        titleClass = '',
        descriptionClass = '',
        descriptionData = {
          title: '',
          description: '',
          btnOptions: {
            title: '',
            route: '/',
            click: null
          }
        }
    }) => {
    let history = useHistory();

    const handleOnClick = () => {
        descriptionData.btnOptions.click ? descriptionData.btnOptions.click() : history.push( descriptionData.btnOptions.route)
    }

    return (
      <div className={`home-description-data-container ${containerClass}`}>
        <Text className={`home-description-data-title ${titleClass}`}
              type={'kBold'}
              size={45}>{descriptionData.title}</Text>
        <Text className={`home-description-data-description ${descriptionClass}`}
              type={'kLight'}
              size={20}>{descriptionData.description}</Text>
        <Button title={descriptionData.btnOptions.title} onClick={handleOnClick}/>
      </div>
  );
};
export default HomeDescriptionDataComponent;
