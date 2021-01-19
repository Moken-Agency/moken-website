import React from "react";
import Text from "../../../../components/Text";
import "./index.scss";
import arrow from "../../../../images/arrrow-top-right-white.png";

const styles = {
  title: {
    color: "white",
  },
  description: {
    color: "white",
    lineHeight: "29px",
  },
  subTitle: {
    color: "white",
    letterSpacing: 4,
  },
};

const MenuScreenTopColumn = ({
  title = "",
  description = "",
  subTitle = "",
  image,
}) => {
  return (
    <div className={"menu-screen-top-column-container"}>
      {image ? (
        <img src={image} className={"menu-screen-image"} />
      ) : (
        <Text
          size={30}
          type={"semiBold"}
          textStyles={styles.title}
          containerStyles={{ marginBottom: 30 }}
        >
          {title}
        </Text>
      )}
      <Text
        size={18}
        type={"light"}
        textStyles={styles.description}
        containerStyles={{ marginBottom: 30 }}
      >
        {description}
      </Text>
      <div className={'subtitle-arrow-container'}>
        <Text
          size={14}
          mobSize={10}
          type={"semiBold"}
          textStyles={styles.subTitle}
        >
          {subTitle}
        </Text>
        <img src={arrow} className={'black-menu-image'}/>
      </div>
    </div>
  );
};

export default MenuScreenTopColumn;
