import React from "react";
import Title from "../Title";
import Description from "../Description";
import Subtitle from "../Subtitle";
import "./index.scss";
import ColorBlock from "../ColorBlock";
import Submit from "./components/Submit";
import EmailForm from "../EmailForm";
import HeaderWithBackground from "../HeaderWithBackground";
import HeaderTitleWithImg from "../HeaderTitleWithImg";
import TitleContainerWithImg from "../TitleContainerWithImg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import JobOfferTitle from "../JobOfferTitle";

const PageGenerator = ({
  data,
  containerStyles = {},
  descriptionOptions = {},
}) => {
  console.log({ data });
  const { isMobile } = useWindowDimensions();

  return (
    <div className={"page-generator-container"} style={containerStyles}>
      {data.map(
        (
          {
            title = "",
            subtitle,
            description,
            colorBlock,
            colorTitle,
            colorSubtitle,
              colorBlockProps = {},
            submit,
            withForm,
            headerTitle,
            headerSubtitle,
            webHeaderBackground,
            mobHeaderBackground,
            headerTitleWithImgTitle,
            headerTitleWithImgSubtitle,
            withHeaderTitleWithImg,
            headerTitleWithImgURL,
            withTitleContainerWithImg,
            titleContainerWithImgTitle,
            titleContainerWithImgDescription,
            titleContainerWithImgImageURL,
          },
          index
        ) => {
          return (
            <div key={"page-generator-container" + index}>
              <JobOfferTitle
                withHeaderTitleWithImg={withHeaderTitleWithImg}
                title={headerTitleWithImgTitle}
                subtitle={headerTitleWithImgSubtitle}
                imgURL={headerTitleWithImgURL}
              />
              {/*<HeaderTitleWithImg withHeaderTitleWithImg={withHeaderTitleWithImg} title={headerTitleWithImgTitle}*/}
              {/*                    subtitle={headerTitleWithImgSubtitle} imgURL={headerTitleWithImgURL}/>*/}
              <HeaderWithBackground
                title={headerTitle}
                subtitle={headerSubtitle}
                webBackground={webHeaderBackground}
                mobBackground={mobHeaderBackground}
                containerStyles={{ marginBottom: "14vw" }}
              />
              <Title
                title={title.toUpperCase()}
                containerStyles={{ marginBottom: isMobile ? 50 : "4vw" }}
              />
              <Subtitle
                size={50}
                mobSize={35}
                subtitle={subtitle}
                containerStyles={{ marginBottom: isMobile ? 50 : "3vw" }}
              />
              <Description
                type={"kLight"}
                mobSize={16}
                description={description}
                // size={'1.25vw'}
                textStyles={{lineHeight: isMobile ? '20px' : '30px'}}
                size={20}
                {...descriptionOptions}
              />
              <Submit submitForm={submit} />

              <ColorBlock
                backgroundColor={colorBlock}
                subtitle={colorSubtitle}
                title={colorTitle}
                {...colorBlockProps}
              />
              {/*<ColorBlock colorBlock={colorBlock} colorTitle={colorTitle} colorSubtitle={colorSubtitle}/>*/}
              <EmailForm withForm={withForm} />
              <TitleContainerWithImg
                title={titleContainerWithImgTitle}
                description={titleContainerWithImgDescription}
                imgURL={titleContainerWithImgImageURL}
                withTitleContainerWithImg
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default PageGenerator;
