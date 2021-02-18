import React, { useEffect, useState } from "react";
import "./styles.scss";
import footerOptions from "./footer-options";
import ColumnMenu from "./components/ColumnMenu";
import Text from "../../components/Text";
import Input from "../Input";
import useValidation from "../../hooks/useValidation";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import validationRules from "../../constans/validation-rules";
import { useHistory } from "react-router-dom";
import Logo from "../Logo";

const { menuOption, socialsMedia, socialsMediaWhite, styles } = footerOptions;
const { menuColumns } = menuOption;
const { joinFirstText, joinSecondText } = styles;

const textStyle = {
  color: "white",
  cursor: "pointer",
};

const containerStyles = {
  marginLeft: "2vw",
  marginRight: "2vw",

  cursor: "pointer",
};

const Footer = ({ isOpen, setIsOpen }) => {
  const { width } = useWindowDimensions();
  const { isMobile } = useWindowDimensions();


  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useValidation({ email: "" }, validationRules.sendEmailValidation);
  let history = useHistory();

  const socialsData = !isMobile ? socialsMedia : socialsMediaWhite;

  return (
    <div className={"footer-container"}>
      <div className={"top-footer-bar"}>
        <div className={"menu-columns"}>
          {menuColumns.map(({ routes, title }, index) => {
            return (
              <ColumnMenu
                key={"column menu" + title + index}
                title={title}
                routes={routes}
              />
            );
          })}
        </div>
        <div className={"send-email-updates-container"}>
          {/*<div style={{display: 'flex', alignItems: 'flex-end'}}>*/}
          {/*  <img*/}
          {/*      src={Logo}*/}
          {/*      className={"logo"}*/}
          {/*      onClick={() => history.push("/")}*/}
          {/*  />*/}
          {/*  <div style={{width: '.6vw', height: '.6vw', borderRadius: '.6vw', marginLeft: '.2vw', backgroundColor: 'red'}}/>*/}
          {/*</div>*/}
          <Logo className={'footer-logo'}/>
          <Text
            size={30}
            animationType={"fade-in"}
            type={"kLight"}
            textStyles={{lineHeight: '35px', fontWeight: 300}}
            className={'footer-join-text'}
          >
            Join our newsletter
          </Text>
          <Text
            size={20}
            type={"kLight"}
            animationType={"fade-in"}
            textStyles={joinSecondText}
            containerStyles={{ marginBottom: 20, lineHeight: "35px", fontWeight: 300}}
          >
            We will send you updates related to all things Moken.
          </Text>
          <Input
            withGoButton
            error={errors.email}
            value={values.email}
            placeholder={"Email"}
            onSubmit={handleSubmit}
            backgroundColor={"#fbfbfb"}
            // animationType={"fade-in"}
            onChange={(event) => {
              console.log(event.target.value);
              handleChange({ name: "email", text: event.target.value })
            }

            }
          />
        </div>
      </div>
      <div className={"bottom-footer-bar"}>
        <div className={"left-footer-bar"}>
          <Text type={"kRegular"}
              // size={".8vw"}
                size={12}
                mobSize={10} color={"white"}>
            Copyright © Moken Startups Inc. 2020
          </Text>
          <div className={"privacy-container"}>
            <Text
              onClick={() => history.push("/privacy")}
              type={"kRegular"}
              // type={"semiBold"}
              // size={'.75vw'}
              size={12}
              color={"white"}
              mobSize={10}
              textStyles={{ letterSpacing: 4 }}
              containerStyles={containerStyles}
            >
              PRIVACY POLICY
            </Text>
            <Text
              onClick={() => history.push("/terms")}
              type={"kRegular"}
              // type={"semiBold"}
              // size={'.75vw'}
              size={12}
              color={"white"}
              mobSize={10}
              textStyles={{ letterSpacing: isMobile ? 3 : 4 }}
              containerStyles={containerStyles}
            >
              TERMS & CONDITIONS
            </Text>
          </div>
        </div>
        <div className={"socials-container"}>
          {socialsData.map(({ image, link }, index) => {
            return (
              <a
                key={"socials" + index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image} alt={"social"} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
