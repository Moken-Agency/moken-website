import React, {useState} from "react";
import Text from "../../../../../components/Text";
import './index.scss';
import {useHistory} from "react-router-dom";

const styles = {
  mainTitle: {
    color: "white",
    letterSpacing: 4,
  },
  routs: {
    color: "white",
    cursor: 'pointer',
    fontWeight: 300
    // letterSpacing: 4
  },
};

const RouteComponent = ({ title = "", pressableComponent, route, isComingSoon }) => {

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const handleOnClick = () => {
      if(!isComingSoon) {
          pressableComponent ? setIsOpen(true) : history.push(route)

      }
  }

    return (
        <div>
            {pressableComponent ? pressableComponent(isOpen, setIsOpen) : null}
          <Text
              size={18}
              textStyles={styles.routs}
              className={`black-menu-bottom-column-item ${isComingSoon ? 'black-menu-bottom-column-coming-soon' : ''}`}
              containerStyles={{marginBottom: 15}}
              type={"kLight"}
              // type={"light"}
              onClick={handleOnClick}
          >
            {title}
          </Text>
        </div>
  );
};

export default RouteComponent;
