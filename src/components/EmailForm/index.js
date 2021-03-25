import React, {useState} from "react";
import Input from "../Input";
import Text from "../Text";
import "./index.scss";
import Button from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useValues from "../../hooks/useValues";
import {sget, spost} from "../../api/helpers";
import emailjs from "emailjs-com";
import Loader from "../Loader";

const EmailForm = ({
  title = "Stay in the loop & never miss a thing.",
  className = "",
  withForm,
                     titleClassName=''
}) => {
  const { isMobile } = useWindowDimensions();

  const [isFetching, setIsFetching] = useState(false);

  const [values, getProps, isFormValid, errors, clearValues] = useValues({
    email: '',
  });

  const handleSubscribe = async () => {
    if(isFormValid) {
      setIsFetching(true);
      emailjs.send(
          'service_xo07b28',
          'template_xlljnfu',
          {...values, name: 'No name'},
          'user_ILhvoG5ED9QfcW7AV2q89')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            localStorage.setItem('subscription', true);
          }, function(error) {
            console.log('FAILED...', error);
          }).finally(() => {
            setIsFetching(false);
          })
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
          <Loader isShow={isFetching} />
          <div data-aos="fade-in" className={"email-form-divider"} />
          <Text
            containerStyles={{ margin: isMobile ? "4vw 0" : "70px 0 78px 0" }}
            size={isMobile ? "5vw" : 30}
            animationType={"fade-in"}
            type={"kLight"}
            // type={"thin"}
              className={titleClassName}
            textStyles={{ letterSpacing: 0.3 }}
          >
            {title}
          </Text>
          {!JSON.parse(localStorage.getItem('subscription')) ? <div className={"email-form-form"}>
            <Input
                value={values.email}
                placeholder={"Your Email Address"}
                onChange={(value) => handleOnChange('email', value)}
                {...getProps('email')}
                containerStyles={{width: isMobile ? '100%' : 300}}
            />
            <Button
                disabled={!isFormValid}
                title={"SUBSCRIBE"}
                onClick={handleSubscribe}
                type={'white-bordered'}
            />
          </div> : <Text  type={"kLight"} size={20}>Subscription</Text>}
        </div>
      ) : null}
    </>
  );
};

export default EmailForm;
