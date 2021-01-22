import React from "react";
import './index.scss';
import Text from "../../../../components/Text";

const Mentor = ({name = 'Mentor Name', title = 'MENTOR TITLE'}) => {
  return (
    <div className={"mentor-container"}>
      <div className={'mentor-info-container'}>
            <Text type={'thin'} size={30} color={'white'} className={'mentor-name'}>{name}</Text>
            <Text type={'semiBold'} size={14} color={'white'} className={'mentor-title'}>{title}</Text>
      </div>
    </div>
  );
};

export default Mentor;
