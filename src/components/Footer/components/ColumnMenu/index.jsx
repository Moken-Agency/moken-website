import React, { useState } from "react";
import "./styles.scss";
import Text from "../../../../components/Text";
import { useHistory } from "react-router-dom";

const titleStyles = {
  whiteSpace: "noWrap",
  // lineHeight: 35,
};

const containerTitleStyles = {
  marginBottom: 35,
};

const routeStyle = {
  marginBottom: "1vw",
  cursor: "pointer",
};

const containerRouteStyle = {
  // marginBottom: '0.05vw'
};

const ColumnTextComponent = ({ title, index, route }) => {
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
      textStyles={{ ...routeStyle, color }}
      type={"light"}
      size={"1.1vw"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => history.push(route)}
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
        type={"semiBold"}
        size={'.9vw'}
        // size={14}
        textStyles={{ ...titleStyles, letterSpacing: 4, marginBottom: ".85vw" }}
        containerStyles={{ ...containerTitleStyles, marginRight: "2.3vw" }}
      >
        {title.toUpperCase()}
      </Text>
      {routes.map(({ title, route }, index) => {
        return (
          <ColumnTextComponent
            key={index + "ColumnTextComponent"}
            title={title}
            route={route}
          />
        );
      })}
    </div>
  );
};

export default ColumnMenu;
