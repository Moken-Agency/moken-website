import React from "react";
import "./index.scss";
import Text from "../Text";
import Button from "../Button";

const HomeHeader = ({
    numberTitle = '',
    titleContainerStyles = '',
    title= ''
    }) => {
  return (
      <section className={'home-header-component'}>
          <Text type={'kBold'} size={20} mobSize={16} className={'home-header-number'}>{numberTitle}</Text>
          <Text type={'kBold'} size={100} mobSize={52} className={'home-header-title'} containerStyles={titleContainerStyles}>{title}</Text>
      </section>

  );
};
export default HomeHeader;
