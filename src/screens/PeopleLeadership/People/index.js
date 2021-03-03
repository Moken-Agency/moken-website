import React from "react";
import "./index.scss";
import Person from "../Person";
import Title from "../../../components/Title";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const People = ({ people, photo, peopleIndex, title }) => {
  const { isMobile } = useWindowDimensions();

  return (
      <div  style={{
          display: "flex",
          flexDirection: "column",
          alignItems: peopleIndex % 2 !== 0 ? "flex-start" : "flex-end",
      }}>
          <div className={'people-main-container'}>
              {isMobile ? (
                  <Title title={title} containerStyles={{ marginBottom: "10vw" }} />
              ) : null}
              {/*<img src={photo} className={'people-employees-container'}/>*/}

              <div
                  className={"people-container"}
                  data-aos="fade-in"

              >
                  <div className={"people-second-container"} style={{ justifyContent: peopleIndex % 2 !== 0 ? "flex-start" : "flex-end"}}>
                      {people.map((person, index) => (
                          <Person {...person} key={"person" + index} />
                      ))}
                  </div>
              </div>
          </div>
      </div>

  );
};

export default People;
