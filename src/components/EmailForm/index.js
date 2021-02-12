import React from "react";
import Input from "../Input";
import Text from "../Text";
import "./index.scss";
import Button from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useValues from "../../hooks/useValues";
import {sget, spost} from "../../api/helpers";

const EmailForm = ({
  title = "Stay in the loop & never miss a thing.",
  width = "20vw",
  value = "",
  className = "",
  withForm,
}) => {
  const { isMobile } = useWindowDimensions();
  const [values, getProps, isFormValid, errors, clearValues] = useValues({
    email: '',
  });

  const handleSubscribe = async () => {
    // https://api.mailerlite.com/api/v2/subscribers
    try {
      const response = await spost({url: 'https://api.mailerlite.com/api/v2/subscribers', body: {
          email: values.email
        }, headersData: {
          'X-MailerLite-ApiKey': 'ad3840165bb63b833ad553646d67bdcb',
          'Content-Type': 'application/json',
        }});
      console.log({response});
    } catch (e) {
      alert('Errror')
    }


  }


  const handleOnChange = (name, value) => {
    const {onChangeText}= getProps(name);
    onChangeText(value)
  }

  return (
    <>
      {withForm ? (
        <div className={`email-form-container ${className}`}>
          <div data-aos="fade-in" className={"email-form-divider"} />
          <Text
            containerStyles={{ margin: isMobile ? "4vw 0" : "70px 0 78px 0" }}
            size={isMobile ? "5vw" : '2vw'}
            animationType={"fade-in"}
            type={"thin"}
            textStyles={{ letterSpacing: 0.3 }}
          >
            {title}
          </Text>
          <div className={"email-form-form"}>
            <Input
              value={values.email}
              placeholder={"Your Email Address"}
              onChange={(value) => handleOnChange('email', value)}
              {...getProps('email')}
              containerStyles={{width: isMobile ? '100%': '20vw'}}
            />
            <Button
              disabled={!isFormValid}
              title={"SUBSCRIBE"}
              onClick={handleSubscribe}
              textColor={"black"}
              borderType={"bordered"}
              backgroundColor={"white"}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EmailForm;
