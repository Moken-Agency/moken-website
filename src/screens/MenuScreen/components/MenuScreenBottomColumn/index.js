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

      {/*{a()}*/}
      {routs.map(({ title, route, pressableComponent }, index) => {
        return (
            <>
              <RouteComponent title={title} route={route} pressableComponent={pressableComponent}/>
              {/*{PressableComponent ? <PressableComponent /> : <Text*/}
              {/*    size={18}*/}
              {/*    textStyles={styles.routs}*/}
              {/*    className={'black-menu-bottom-column-item'}*/}
              {/*    containerStyles={{marginBottom: 15}}*/}
              {/*    type={"light"}*/}
              {/*    key={"MenuScreenBottomColumnRouts" + index}*/}
              {/*    // onClick={() => history.push(route)}*/}
              {/*>*/}
              {/*  {title}*/}
              {/*</Text>}*/}
          </>
        );
      })}
    </div>
  );
};

export default MenuScreenBottomColumn;
