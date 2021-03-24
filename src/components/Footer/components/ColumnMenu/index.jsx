import React, { useState } from "react";
import "./styles.scss";
import Text from "../../../../components/Text";
import { useHistory } from "react-router-dom";

const titleStyles = {
  whiteSpace: "noWrap",
  // lineHeight: 35,
};




const containerRouteStyle = {
  // marginBottom: '0.05vw'
};

const ColumnTextComponent = ({ title, index, route = '', link }) => {
  let history = useHistory();

  const [color, setColor] = useState("black");
  const onMouseEnter = () => {
    setColor("grey");
  };
  const onMouseLeave = () => {
    setColor("black");
  };
  return (
    <Text
      key={"column menu" + index + title}
      textStyles={{ cursor: 'pointer', marginBottom: 12, color }}
      type={"kLight"}
      // type={"light"}
      size={20}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => route ? history.push(route) : window.open(link, '_blank')}
      containerStyles={containerRouteStyle}
    >
      {title}
    </Text>
  );
};

const ColumnMenu = ({ routes = [], title }) => {
  return (
    <div className={"column-menu-container"}>
      <Text
        type={"kMedium"}
        // type={"semiBold"}
        // size={'.9vw'}
        size={16}
        textStyles={{ ...titleStyles, letterSpacing: 4, fontWeight: 300 }}
        containerStyles={{ marginBottom: 37, marginRight: 100 }}
      >
        {title.toUpperCase()}
      </Text>
      {routes.map(({ title, route, link }, index) => {
        return (
          <ColumnTextComponent
            key={index + "ColumnTextComponent"}
            title={title}
            route={route}
            link={link}
          />
        );
      })}
    </div>
  );
};

export default ColumnMenu;
