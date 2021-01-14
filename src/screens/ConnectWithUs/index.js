import React, { useState } from "react";
import Text from "../../components/Text";
import "./index.scss";
import options from "./options";
import RoundedSelectableButton from "../../components/RoundedSelectableButton";
import Input from "../../components/Input";
import SubmitYourResume from "../../components/SubmitYourResume";
import EmailForm from "../../components/EmailForm";
import Title from "../../components/Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../../components/ImageBlock";

const ConnectWithUs = () => {
  const { isMobile } = useWindowDimensions();

  const [selectedInterests, setSelectedInterests] = useState([]);

  const checkIsSelected = ({ title }) => {
    return selectedInterests.find(
      (selectedInterest) => selectedInterest.title === title
    );
  };

  const handleSelectInterest = (interest) => {
    const indexCurrentInterest = selectedInterests.findIndex(({ title }) => {
      return title === interest.title;
    });

    if (indexCurrentInterest === -1) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      let newSelectedInterests = selectedInterests.filter(
        ({ title }) => title !== interest.title
      );
      setSelectedInterests(newSelectedInterests);
    }
  };

  return (
    <div className={"connect-with-us-container"}>
      <header>
        <div className={"connect-with-us-header-info"}>
          <Text size={104} mobSize={75} type={"thin"}>
            Connect with us.
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            type={"light"}
          >
            We are more than just collaborators.
          </Text>
          <Text
            size={20}
            textStyles={{ lineHeight: isMobile ? "26px" : "35px" }}
            type={"light"}
          >
            We are partners in your startup’s success.
          </Text>
        </div>
        <img src={""} />
      </header>

      <section className={"connect-with-me-about-container"}>
        <Text
          className={"connect-with-me-about-title"}
          type={"semiBold"}
          size={16}
        >
          I’M INTERESTED IN HEARING MORE ABOUT,
        </Text>

        <div className={"connect-with-me-about-interests"}>
          {options.interests.map((interest, index) => {
            return (
              <RoundedSelectableButton
                key={"interests" + index}
                {...interest}
                isSelected={checkIsSelected(interest)}
                onClick={() => handleSelectInterest(interest)}
              />
            );
          })}
        </div>

        <form>
          <div className={"form-container"}>
            <Input placeholder={"Your Name"} width={"37.5vw"} size={20} />
            <Input placeholder={"Your Company"} width={"37.5vw"} size={20} />
          </div>
          <div className={"form-container"}>
            <Input placeholder={"Email"} width={"37.5vw"} size={20} />
            <Input placeholder={"Subject"} width={"37.5vw"} size={20} />
          </div>
          <Input
            size={20}
            placeholder={"Your Message"}
            inputType={"textarea"}
            resize={"vertical"}
          />

          <SubmitYourResume title={"Submit Inquiry"} color={"black"} />
        </form>
      </section>

      <ImageBlock type={"full"} />

      <EmailForm withForm />
    </div>
  );
};

export default ConnectWithUs;
