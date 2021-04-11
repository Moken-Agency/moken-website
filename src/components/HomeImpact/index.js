import React, {useMemo, useState} from "react";
import "./index.scss";
import Text from "../Text";
import {useHistory} from "react-router-dom";

const HomeImpact = ({title = '', subtitle = '', route = '/', isComingSoon = false}) => {

  const [isHover, setIsHover] = useState(false);

  const history = useHistory();

  const renderTitle = useMemo(() => {
      return isHover && isComingSoon ? 'Coming soon.' : title
  }, [isHover])

    const handleOnClick = () => {
      return isComingSoon ? null : history.push(route);
    }

  return (
      <div className={`home-impact-item ${isComingSoon && isHover ? 'home-impact-item-disabled' : ''}`}
           onMouseEnter={() => setIsHover(true)}
           onMouseLeave={() => setIsHover(false)}
           style={{cursor: isComingSoon ? 'not-allowed' : 'pointer'}}
           onClick={handleOnClick}>
          <Text type={'kBold'} size={35} className={'home-impact-item-title'} textStyles={{lineHeight: '45px'}}>{renderTitle}</Text>
          <Text type={'kSemiBold'} className={'home-impact-item-subtitle'} size={16} color={'#ff2a68'}>{subtitle}</Text>
      </div>

  );
};
export default HomeImpact;
