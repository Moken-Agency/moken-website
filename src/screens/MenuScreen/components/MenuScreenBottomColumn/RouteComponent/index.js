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

const RouteComponent = ({ title = "", pressableComponent, route }) => {

  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

    return (
        <>
            {pressableComponent ? pressableComponent(isOpen, setIsOpen) : null}
          <Text
              size={18}
              textStyles={styles.routs}
              className={'black-menu-bottom-column-item'}
              containerStyles={{marginBottom: 15}}
              type={"kLight"}
              // type={"light"}
              onClick={() =>  pressableComponent ? setIsOpen(true) : history.push(route)}
          >
            {title}
          </Text>
        </>
  );
};

export default RouteComponent;
