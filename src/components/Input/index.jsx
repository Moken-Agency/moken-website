import React, {useEffect, useState} from "react";
import "./styles.scss";
import Text from "../Text";
import textTypes from "../../constans/text-types";
import useWindowDimensions from "../../hooks/useWindowDimensions";


// <AnimatedInput
//     placeholder="Email"
//     valid={isValid}
//     errorText="Error"
//     onChangeText={handleChange}
//     value={email}
//     styleLabel={{ fontWeight: "600" }}
//     styleBodyContent={{ borderBottomWidth: 1.5 }}
// />

const validate = () => {

}

const Input = ({
  value,
  // onChange = () => {},
  placeholder,
  withGoButton,
  onSubmit = () => {},
  error = "",
  typeText = "Latinka Medium",
  width = "100%",
  inputType = "input",
  height = "auto",
  className = "",
  size = ".9vw",
  mobSize = 14,
  resize = "both",
  backgroundColor = "white",
    containerStyles= {},
                 errorMessage,
        ...rest
}) => {


  const [isActive, setIsActive] = useState('');



  useEffect(() => {
    if (value !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [value])

  const { isMobile } = useWindowDimensions();
  return (
    <div className={`container ${className}`} style={containerStyles}>
      <div className={"buttonContainer"}>
        {inputType === "input" ? (
                <div className={'float-label'} style={{backgroundColor}}>
                  <input
                      // onChange={(e) => handleTextChange(e.target.value)}
                      //    value={value}
                         className={`${errorMessage ? 'Error' : ''}`}
                         style={{fontSize: isMobile ? mobSize : size,fontFamily: textTypes[typeText] }}
                         {...rest}
                  />

                  <label htmlFor="email" className={ `${isActive ? 'Active' : ''} ${errorMessage ? 'error' : ''}`}>
                    {placeholder}
                  </label>
                </div>
          //   <input
          //   className={"input"}
          //   value={value}
          //   style={{
          //     fontFamily: textTypes[type],
          //     // width,
          //     height,
          //     fontSize: isMobile ? mobSize : size,
          //     backgroundColor,
          //   }}
          //   onChange={onChange}
          //   placeholder={placeholder}
          // />
        ) : (
            <div className={`float-label-textarea ${inputType}`} style={{backgroundColor}}>
              <textarea
                     // value={value}
                     // onChange={(e) => handleTextChange(e.target.value)}
                     style={{fontSize: isMobile ? mobSize : size,
                       fontFamily: textTypes[typeText],
                       resize,
                       minHeight: 350
                     }}
                     {...rest}
              />

              <label htmlFor="email"
                     className={ isActive ? "Active" : ""}
                     style={{fontSize: isMobile ? mobSize : size,fontFamily: textTypes[typeText]}}
              >
                {placeholder}
              </label>
            </div>
          // <textarea
          //   className={`input ${inputType}`}
          //   value={value}
          //   style={{
          //     fontFamily: textTypes[type],
          //     width,
          //     height,
          //     fontSize: isMobile ? mobSize : size,
          //     resize,
          //     backgroundColor,
          //   }}
          //   onChange={onChange}
          //   placeholder={placeholder}
          // />
        )}
        {withGoButton && (
          <button className={"goButton"} onClick={onSubmit}>
            <Text type={"semiBold"} size={'1.4vw'}>
              Go
            </Text>
          </button>
        )}
      </div>

      {errorMessage ? <Text className={'input-error-message'}
                            size={12}
                            color={'red'}
                            type={'light'}>{errorMessage}</Text> : null}

      {/*<div*/}
      {/*  className={"divider"}*/}
      {/*  data-aos="fade-in"*/}
      {/*  style={{ backgroundColor: error ? "red" : "black" }}*/}
      {/*/>*/}
    </div>
  );
};

export default Input;
