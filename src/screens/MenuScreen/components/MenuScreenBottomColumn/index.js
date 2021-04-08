import React, {useState} from "react";
import Text from "../../../../components/Text";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import './index.scss';
import RouteComponent from "./RouteComponent";
import ReportBug from "../../../../components/ReportBug";

const styles = {
  mainTitle: {
    color: "white",
    letterSpacing: 4,
  },
  routs: {
    color: "white",
      cursor: 'pointer'
    // letterSpacing: 4
  },
};

const a = () => {
  return  <ReportBug isOpen={true}/>
}

const MenuScreenBottomColumn = ({ title = "", routs = [], isLast, containerStyles }) => {
  const { isMobile } = useWindowDimensions();

    return (
    <div className={'menu-screen-bottom-column-container'}
         style={{marginRight: isLast ? 0 : null, ...containerStyles}}>
      <Text
        size={20}
        mobSize={16}
        type={"kSemiBold"}
        textStyles={{
          ...styles.mainTitle,
          lineHeight: isMobile ? "26px" : "30px",
        }}
        containerStyles={{ marginBottom: 65 }}
      >
        {title}
      </Text>

      {/*{a()}*/}
      {routs.map(({ title, route, pressableComponent, isComingSoon }, index) => {
        return (
              <RouteComponent key={'RouteComponent' + title + index} title={title} route={route} pressableComponent={pressableComponent} isComingSoon={isComingSoon}/>
        );
      })}
    </div>
  );
};

export default MenuScreenBottomColumn;
