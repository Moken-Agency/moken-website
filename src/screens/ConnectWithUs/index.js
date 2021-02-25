import React, { useState } from "react";
import Text from "../../components/Text";
import "./index.scss";
import options from "./options";
import RoundedSelectableButton from "../../components/RoundedSelectableButton";
import Input from "../../components/Input";
import SubmitYourResume from "../../components/SubmitYourResume";
import EmailForm from "../../components/EmailForm";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ImageBlock from "../../components/ImageBlock";
import emailjs from 'emailjs-com';
import Button from "../../components/Button";
import useValues from "../../hooks/useValues";
import Loader from "../../components/Loader";
import ConnectHeaderImage from '../../images/contact-header.jpg';
import ConnectSecondImage from '../../images/contact-second.jpg';

const ConnectWithUs = () => {
  const { isMobile } = useWindowDimensions();



  const [values, getProps, isFormValid, errors, clearValues] = useValues({
    name: '',
    companyName: '',
    email: '',
    subject: '',
    message: ''
  });

  const {name, companyName, email, subject, message} = values;

  const [selectedInterests, setSelectedInterests] = useState([]);

  const [isFetching, setIsFetching] = useState(false);


  const handleOnChange = (name, value) => {
   const {onChangeText}= getProps(name);
    onChangeText(value)
  }

  const handleSendMessage = () => {
    if(isFormValid) {
      setIsFetching(true);
      console.log({isFormValid});
      emailjs.send(
          'service_g5bkqs3',
          'template_z4t2vgf',
          {...values, selectedInterests: selectedInterests.map(interest => interest.title).join(', ')},
          'user_PVH6rCM6bGLGbGfJolUbL')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          }).finally(() => {
        clearValues();
        setIsFetching(false);

      })

    } else {
      console.log({errors});
      alert('Not valid')
    }

  }


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
      <Loader isShow={isFetching} />
      <header>
        <div className={"connect-with-us-header-info"}>
          <Text size={104} mobSize={75} textStyles={{lineHeight: isMobile ? '75px' : '104px'}} type={"kBold"}>
            Connect with us.
          </Text>
          <Text
            size={20}
            // textStyles={{ lineHeight: isMobile ? "26px" : "35px", fontWeight: 300 }}
            className={'connect-header-subtitle'}
            type={"kLight"}
          >
            Want to get in touch? We’d love to hear from you. Share with us how we can help you best, below.
          </Text>

        </div>
        <img src={ConnectHeaderImage} />
      </header>

      <section className={"connect-with-me-about-container"}>
        <Text
          className={"connect-with-me-about-title"}
          type={"kMedium"}
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

        <div className={'form'}>
          <div className={"form-container"}>
            <Input placeholder={"Your Name"}
                   value={name}
                   onChange={(value) => handleOnChange('name', value)}
                   containerStyles={{width: '37.5vw'}} size={20}
                   {...getProps('name')}

            />
            <Input placeholder={"Your Company"}
                   value={companyName}
                   onChange={(value) => handleOnChange('companyName', value)}
                   containerStyles={{width: '37.5vw'}}
                   size={20}
                   {...getProps('companyName')}

            />
          </div>
          <div className={"form-container"}>
            <Input placeholder={"Email"}
                   value={email}
                   onChange={(value) => handleOnChange('email', value)}
                   containerStyles={{width: '37.5vw'}}
                   size={20}
                   {...getProps('email')}
            />
            <Input placeholder={"Subject"}
                   value={subject}
                   onChange={(value) => handleOnChange('subject', value)}
                   containerStyles={{width: '37.5vw'}}
                   size={20}
                   {...getProps('subject')}

            />
          </div>
          <Input
            size={20}
            value={message}
            placeholder={"Your Message"}
            onChange={(value) => handleOnChange('message', value)}
            inputType={"textarea"}
            resize={"vertical"}
            {...getProps('message')}

          />

          <Button disabled={!isFormValid || selectedInterests.length === 0} containerStyles={{marginTop: 50}} title={"Submit Inquiry".toUpperCase()} onClick={handleSendMessage} />
        </div>
      </section>

      <ImageBlock url={ConnectSecondImage} />

      <EmailForm withForm />
    </div>
  );
};

export default ConnectWithUs;


