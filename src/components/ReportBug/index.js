import React from "react";
import Modal from 'react-modal';
import "./index.scss";
import Text from "../Text";
import Input from "../Input";
import SaveImage from "../../images/save.png";
import Circles from "../../images/report-bug-circles.png";
import Button from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ReportBug = ({isOpen, setIsOpen, widthVW = 90, heightVH = 90}) => {
  const { isMobile } = useWindowDimensions();
  const customStyles = {
    content : {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',

    }
  };
  return (
    <Modal
        isOpen={isOpen}
        customStyles={customStyles}
        style={{
          overlay: {
            backgroundColor: 'rgb(253, 253, 253, 50%)',

          },
          // content: {
          //   width: widthVW + 'vw',
          //   height: heightVH + 'vh'
          // }
        }}
        // className="Modal"
    >
      <div className={"report-bug-container"}>
        <Text containerStyles={{position: 'absolute', right: 10, top: 10, cursor: 'pointer'}}
              type={'semiBold'}
              size={16}
              textStyles={{letterSpacing: 4}}
              onClick={() => setIsOpen(false)}>CLOSE</Text>

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
            containerStyles={{ marginBottom: isMobile ? 20 : 18 }}
          >
            SOMETHING JUST NOT WORKING RIGHT?
          </Text>
          <Text
            size={"4.3vw"}
            mobSize={45}
            type={"thin"}
            containerStyles={{ marginBottom: isMobile ? 55 : 55 }}
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
