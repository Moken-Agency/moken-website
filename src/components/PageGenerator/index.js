import React from 'react';
import Title from "../Title";
import Description from "../Description";
import Subtitle from "../Subtitle";
import './index.scss';
import ColorBlock from "../ColorBlock";
import Submit from "./components/Submit";
import EmailForm from "../EmailForm";
import HeaderWithBackground from "../HeaderWithBackground";
import HeaderTitleWithImg from "../HeaderTitleWithImg";
import TitleContainerWithImg from "../TitleContainerWithImg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const PageGenerator = ({data}) => {
    console.log({data});
    const {isMobile} = useWindowDimensions()

    return (
        <div className={'page-generator-container'}>
            {
                data.map(({title = '',
                              subtitle,
                              description,
                              colorBlock,
                              colorTitle,
                              colorSubtitle,
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
                              titleContainerWithImgImageURL
                          }, index) => {
                    return (
                        <div key={'page-generator-container' + index}>
                            <HeaderTitleWithImg withHeaderTitleWithImg={withHeaderTitleWithImg} title={headerTitleWithImgTitle}
                                                subtitle={headerTitleWithImgSubtitle} imgURL={headerTitleWithImgURL}/>
                            <HeaderWithBackground title={headerTitle}
                                                  subtitle={headerSubtitle}
                                                  webBackground={webHeaderBackground}
                                                  mobBackground={mobHeaderBackground}
                                                  containerStyles={{marginBottom: '14vw'}}
                            />
                            <Title title={title.toUpperCase()}
                                   containerStyles={{marginBottom: isMobile ? 50 : '4vw'}}/>
                            <Subtitle
                                      size={'2.9vw'}
                                      mobSize={35}
                                      subtitle={subtitle}
                                      containerStyles={{marginBottom: isMobile ? 50 : '3vw'}}/>
                            <Description type={'light'} mobSize={16} description={description} size={'1.23vw'}/>
                            <Submit submitForm={submit}/>

                            <ColorBlock backgroundColor={colorBlock} subtitle={colorSubtitle} title={colorTitle}/>
                                    {/*<ColorBlock colorBlock={colorBlock} colorTitle={colorTitle} colorSubtitle={colorSubtitle}/>*/}
                            <EmailForm withForm={withForm} title={'Stay in the loop & never miss a thing.'}/>
                            <TitleContainerWithImg title={titleContainerWithImgTitle}
                                                       description={titleContainerWithImgDescription}
                                                       imgURL={titleContainerWithImgImageURL}
                                                       withTitleContainerWithImg/>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default PageGenerator;
