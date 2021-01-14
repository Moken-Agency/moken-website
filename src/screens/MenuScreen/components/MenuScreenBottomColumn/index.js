import React from "react";
import Text from "../../../../components/Text";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const styles = {
  mainTitle: {
    color: "white",
    letterSpacing: 4,
  },
  routs: {
    color: "white",
    // letterSpacing: 4
  },
};

const MenuScreenBottomColumn = ({ title = "", routs = [] }) => {
  const { isMobile } = useWindowDimensions();
  return (
    <div style={{ marginRight: 150 }}>
      <Text
        size={20}
        mobSize={16}
        type={"semiBold"}
        textStyles={{
          ...styles.mainTitle,
          lineHeight: isMobile ? "26px" : "35px",
        }}
        containerStyles={{ marginBottom: 65 }}
      >
        {title}
      </Text>
      {routs.map(({ title }, index) => {
        return (
          <Text
            size={18}
            textStyles={styles.routs}
            containerStyles={{ marginBottom: 15 }}
            type={"light"}
            key={"MenuScreenBottomColumnRouts" + index}
          >
            {title}
          </Text>
        );
      })}
    </div>
  );
};

export default MenuScreenBottomColumn;
