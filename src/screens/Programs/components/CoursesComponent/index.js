import React from "react";
import Title from "../../../../components/Title";
import Text from "../../../../components/Text";
import options from "../../Courses/options";
import Course from "../../Courses/Course";
import "./index.scss";

const CoursesComponent = () => {
  return (
    <>
      <Title title={"THE COURSES"} className={"courses-courses-title"} />

      <section className={"courses-courses-container"}>
        <Text
          animationType={"fade-up"}
          size={55}
          mobSize={35}
          type={"kBold"}
          // type={"extraLight"}
          className={"courses-courses-text"}
        >
          Self directed courses….Join our trusted community of partners and
          market what you do to founders and startups.
        </Text>
        <div data-aos="fade-up" className={"courses-list-container"}>
          {options.courses.map((course, index) => (
            <Course {...course} key={"courses" + index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesComponent;
