import React from "react";
import Modal from 'react-modal';
import "./index.scss";
import Text from "../Text";
import Input from "../Input";
import SaveImage from "../../images/save.png";
import Circles from "../../images/report-bug-circles.png";
import Button from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useValues from "../../hooks/useValues";

const ReportBug = ({isOpen, setIsOpen, widthVW = 90, heightVH = 90}) => {
  const { isMobile } = useWindowDimensions();
  const customStyles = {
    content : {
      // backgroundColor: 'rgba(0, 0, 0, 0.1)',

    }
  };


  const [values, getProps, isFormValid, errors, clearValues] = useValues({
    email: '',
    page: '',
    issue: ''
  });
  return (
    <Modal
        isOpen={isOpen}
        customStyles={customStyles}
        style={{
          overlay: {
            // backgroundColor: 'rgba()',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            // padding: '115px 153px'
            position: 'initial',
            inset: 0,
            backgroundColor: 'transparent',
            padding: 0,
            border: 0,
            // width: 1450,
            // height: 930
          }
        }}
        // className="Modal"
    >
        <div className={"report-bug-container"}>
          <Text containerStyles={{position: 'absolute', right: 40, top: 40, cursor: 'pointer'}}
                type={'kMedium'}
                size={16}
                textStyles={{letterSpacing: 4}}
                onClick={() => setIsOpen(false)}>CLOSE</Text>

          <div className={"report-bug-left-container"}>
            <Text
                size={12}
                mobSize={16}
                type={"kSemiBold"}
                textStyles={{ letterSpacing: 4 }}
            >
              FOUND A TYPO?
            </Text>
            <Text
                size={12}
                mobSize={16}
                type={"kSemiBold"}
                textStyles={{ letterSpacing: 4 }}
                containerStyles={{ marginBottom: isMobile ? 20 : 18 }}
            >
              SOMETHING JUST NOT WORKING RIGHT?
            </Text>
            <Text
                size={75}
                mobSize={45}
                type={"kBold"}
                containerStyles={{ marginBottom: isMobile ? 55 : 55 }}
            >
              Report a Bug
            </Text>
            <Input
                size={16}
                mobSize={14}
                type={"kLight"}
                className={"first-input"}
                placeholder={"Your Email Address"}
                value={values.email}
            />
            <Input
                size={16}
                mobSize={14}
                type={"kLight"}
                className={"second-input"}
                placeholder={"Which page URL has an error or bug?"}
                value={values.page}

            />
            <Input
                type={"kLight"}
                resize={"none"}
                className={"third-input"}
                placeholder={"What is the issue?"}
                inputType={"textarea"}
                value={values.issue}
            />
            <div className={"screenshot-container"}>
              <img src={SaveImage} />
              <div className={"screenshot-text-container"}>
                <Text
                    type={"kSemiBold"}
                    size={14}
                    mobSize={10}
                    containerStyles={{ marginBottom: 5 }}
                >
                  Attach a screenshot of the issue (*If applicable)
                </Text>
                <Text type={"kLight"} size={10} mobSize={8}>
                  Max file size is 10MB
                </Text>
              </div>
            </div>

            <div className={"btn-container"}>
              <Button
                  size={12}
                  mobSize={12}
                  type={'white-bordered'}
                  title={"REPORT THE BUG"}
                  className={'report-a-bug-button'}
                  onClick={() => window.open('mailto:Agency@mokenstartups.com', '_blank')}
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
