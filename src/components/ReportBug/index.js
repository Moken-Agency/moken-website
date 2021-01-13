import React from "react";
import Modal from "../Modal";
import "./index.scss";
import Text from "../Text";
import Input from "../Input";
import SaveImage from "../../images/save.png";
import Circles from "../../images/report-bug-circles.png";
import Button from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ReportBug = (props) => {
  const { isMobile } = useWindowDimensions();

  return (
    <Modal
      buttonTitle={"report a bug".toUpperCase()}
      buttonClassName={"report-a-bug-button"}
    >
      <div className={"report-bug-container"}>
        <div className={"report-bug-left-container"}>
          <Text
            size={".8vw"}
            mobSize={16}
            type={"semiBold"}
            textStyles={{ letterSpacing: 4 }}
          >
            FOUND A TYPO?
          </Text>
          <Text
            size={".8vw"}
            mobSize={16}
            type={"semiBold"}
            textStyles={{ letterSpacing: 4 }}
            containerStyles={{ marginBottom: isMobile ? 20 : 0 }}
          >
            SOMETHING JUST NOT WORKING RIGHT?
          </Text>
          <Text
            size={"4.3vw"}
            mobSize={45}
            type={"thin"}
            containerStyles={{ marginBottom: isMobile ? 55 : "5.4vw" }}
          >
            Report a Bug
          </Text>
          <Input
            size={".9vw"}
            mobSize={14}
            type={"light"}
            className={"first-input"}
            placeholder={"Your Email Address"}
          />
          <Input
            size={".9vw"}
            mobSize={14}
            type={"light"}
            className={"second-input"}
            placeholder={"Which page URL has an error or bug?"}
          />
          <Input
            size={".9vw"}
            mobSize={14}
            type={"light"}
            resize={"none"}
            className={"third-input"}
            placeholder={"What is the issue?"}
            inputType={"textarea"}
            height={isMobile ? 80 : "4vw"}
          />
          <div className={"screenshot-container"}>
            <img src={SaveImage} />
            <div className={"screenshot-text-container"}>
              <Text
                type={"semiBold"}
                size={".56vw"}
                mobSize={10}
                containerStyles={{ marginBottom: 5 }}
              >
                Attach a screenshot of the issue (*If applicable)
              </Text>
              <Text type={"light"} size={".45vw"} mobSize={8}>
                Max file size is 10MB
              </Text>
            </div>
          </div>

          <div className={"btn-container"}>
            <Button
              size={".8vw"}
              mobSize={12}
              borderType={"bordered"}
              color={"white"}
              title={"REPORT THE BUG"}
            />
          </div>
        </div>
        <div className={"report-bug-right-container"}>
          <img src={Circles} />
        </div>
      </div>
    </Modal>
  );
};

export default ReportBug;
