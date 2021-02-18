import React from "react";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import "./index.scss";

const Course = ({ url, title = "", description = "", btnTitle = "" }) => {
  return (
    <div className={"course-container"}>
      <img src={url} data-aos="fade-in" />
      <section className={"course-component-info-block"}>
        <div>
          <Text
            animationType={"fade-in"}
            size={35}
            className={"course-component-first"}
            mobSize={20}
            type={"kBold"}
            // type={"thin"}
          >
            {title}
          </Text>
          <Text
            animationType={"fade-in"}
            size={18}
            mobSize={14}
            className={"course-component-second"}
            type={"kMedium"}
            textStyles={{fontWeight: 300}}
            // type={"light"}
          >
            {description}
          </Text>
        </div>
        <Button
          title={btnTitle}
          backgroundColor={"black"}
          textColor={"white"}
          mobSize={10}
          size={14}
        />
      </section>
    </div>
  );
};

export default Course;
