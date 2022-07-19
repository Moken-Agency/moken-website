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
import moment from "moment";
import useValues from "../../hooks/useValues";
import emailjs from "emailjs-com";
import Loader from "../Loader";
import Form from "../Form";

const { menuOption, socialsMedia, socialsMediaWhite, styles } = footerOptions;
// const { menuColumns } = menuOption;
const { joinFirstText, joinSecondText } = styles;

const containerStyles = {
  marginLeft: "2vw",
  marginRight: "2vw",
  cursor: "pointer",
};

const Footer = ({ isOpen, setIsOpen }) => {
  const { width } = useWindowDimensions();
  const { isMobile } = useWindowDimensions();

  const year = new Date().getFullYear();
  let history = useHistory();

  const [isFetching, setIsFetching] = useState(false);

  const [values, getProps, isFormValid, errors, clearValues] = useValues({
    email: "",
  });

  const handleSubscribe = async () => {
    if (isFormValid) {
      setIsFetching(true);
      emailjs
        .send(
          "service_xo07b28",
          "template_xlljnfu",
          { ...values, name: "No name" },
          "user_ILhvoG5ED9QfcW7AV2q89"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            localStorage.setItem("subscription", true);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        )
        .finally(() => {
          setIsFetching(false);
        });
    }
  };
  const [isFormOpened, setIsFormOpened] = useState(false);

  const handleOnChange = (name, value) => {
    const { onChangeText } = getProps(name);
    onChangeText(value);
  };

  const menuColumns = [
    {
      title: "The Company",
      routes: [
        {
          title: "About Moken",
          route: "/about-moken",
        },
        {
          title: "The Agency",
          route: "/about-agency",
        },
        {
          title: "Our Partners",
          route: "/our-partners",
        },
        // {
        //   title: "Access Network",
        //   route: "/access",
        // },
        {
          title: "Careers",
          route: "/careers",
        },
        {
          title: "Insights",
          link: "https://medium.com/insights",
        },
      ],
    },
    {
      title: "Help & Support",
      routes: [
        {
          title: "FAQ",
          route: "/faqs",
        },
        {
          title: "Connect with Us",
          route: "/connect-with-us",
        },
        {
          title: "Privacy",
          route: "/privacy",
        },
        {
          title: "Terms",
          route: "/terms",
        },
      ],
    },
    {
      title: "Collaborate",
      routes: [
        {
          title: "Become a Partner",
          onClick: () => setIsFormOpened(true),
        },
        {
          title: "Sponsor the Future",
          route: "/advertise-with-us",
          isComingSoon: true,
        },
        {
          title: "Work with Mo + Ken",
          route: "/mo-ken",
          isComingSoon: true,
        },
        {
          title: "Product Testing Team",
          route: "/product-testing-team",
        },
        {
          title: "Educate the Next Generation",
          route: "/mentorship",
        },
        {
          title: "Innovation Week",
          route: "/innovation-week",
        },
      ],
    },
  ];

  const socialsData = !isMobile ? socialsMedia : socialsMediaWhite;

  return (
    <div className={"footer-container"}>
      <Form
        isOpen={isFormOpened}
        setIsOpen={setIsFormOpened}
        formName={"Partnership Application Form"}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdNWRpMITHHWPNhulHQArjTfad7cGcWxGRZdr4XYxPI-3rQTA/viewform?embedded=true"
          width={"100%"}
          height="auto"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        />
      </Form>
      <Loader isShow={isFetching} />

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
          <Logo className={"footer-logo"} />
          <Text
            size={30}
            animationType={"fade-in"}
            type={"kLight"}
            textStyles={{ lineHeight: "35px", fontWeight: 300 }}
            className={"footer-join-text"}
          >
            Join our newsletter
          </Text>
          <Text
            size={20}
            type={"kLight"}
            animationType={"fade-in"}
            textStyles={joinSecondText}
            containerStyles={{
              marginBottom: 20,
              lineHeight: "30px",
              fontWeight: 300,
            }}
          >
            We will send you updates related to all things Moken.
          </Text>
          {!JSON.parse(localStorage.getItem("subscription")) ? (
            <Input
              withGoButton
              error={errors.email}
              value={values.email}
              placeholder={"Email"}
              onSubmit={handleSubscribe}
              backgroundColor={"#fbfbfb"}
              // animationType={"fade-in"}
              onChange={(value) => handleOnChange("email", value)}
              {...getProps("email")}
            />
          ) : (
            <Text type={"kLight"} size={20}>
              Thank you for subscribing
            </Text>
          )}
        </div>
      </div>
      <div className={"bottom-footer-bar"}>
        <div className={"left-footer-bar"}>
          <Text
            type={"kRegular"}
            // size={".8vw"}
            size={10}
            mobSize={10}
            color={"white"}
          >
            Copyright © Moken Startups Inc. {year}
          </Text>
          <div className={"privacy-container"}>
            <Text
              onClick={() => history.push("/privacy")}
              type={"kRegular"}
              // type={"semiBold"}
              // size={'.75vw'}
              size={10}
              color={"white"}
              mobSize={10}
              textStyles={{ letterSpacing: 4 }}
              containerStyles={{ margin: "0 65px" }}
            >
              PRIVACY POLICY
            </Text>
            <Text
              onClick={() => history.push("/terms")}
              type={"kRegular"}
              // type={"semiBold"}
              // size={'.75vw'}
              size={10}
              color={"white"}
              mobSize={10}
              textStyles={{ letterSpacing: isMobile ? 3 : 4 }}
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
