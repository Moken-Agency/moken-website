import React from "react";
import options from "../../MokenLabs/options";
import Text from "../../../../components/Text";
import "./index.scss";

const defaultOptions = [
  {
    title: "TYPE",
    subtitle: "Mentorship",
  },
  {
    title: "LOCATION",
    subtitle: `Vancouver 
& Toronto`,
  },
  {
    title: "LENGTH",
    subtitle: "12 Weeks",
  },
  {
    title: "STATUS",
    subtitle: `Applications Open 
January 2021`,
  },
];

const ProgramDetails = ({ options = defaultOptions, type, subtitle }) => {
  return (
    <section className={`labs-details-container`} data-aos="fade-in">
      <div className={`labs-details-block ${`block-${type}`}`}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text
            className={`labs-details-title ${`title-${type}`}`}
            color={"white"}
            size={type === "mokenlabs" ? '3.1vw' : '1.95vw'}
            type={"thin"}
            textStyles={{ lineHeight: type === "mokenlabs" ? "3.7vw" : "auto" }}
          >
            Program Details
          </Text>
          {subtitle ? (
            <Text
              color={"white"}
              containerStyles={{ alignItems: "flex-start" }}
              // size={16}
              size={'.95vw'}

              textStyles={{ letterSpacing: 4 }}
            >
              {subtitle}
            </Text>
          ) : null}
        </div>

        <div className={`labs-details-list-block ${`list-${type}`}`}>
          {options.map(({ title, subtitle }) => {
            return (
              <div>
                <Text
                  type={"semiBold"}
                  color={"white"}
                  size={'.9vw'}
                  // size={14}
                  mobSize={10}
                  containerStyles={{ marginBottom: 11 }}
                >
                  {title.toUpperCase()}
                </Text>
                <Text
                  type={"light"}
                  textStyles={{ whiteSpace: "pre" }}
                  color={"white"}
                  size={'.95vw'}

                  // size={16}
                >
                  {subtitle}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
