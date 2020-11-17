import React from 'react';
import Title from "../Title";
import Description from "../Description";
import Subtitle from "../Subtitle";
import './index.scss';
import ColorBlock from "../ColorBlock";
import Submit from "./components/Submit";
import EmailForm from "../EmailForm";
import HeaderWithBackground from "../HeaderWithBackground";

const PageGenerator = ({data}) => {
    console.log({data});

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
                              mobHeaderBackground}, index) => {
                    return (
                        <div key={'page-generator-container' + index}>
                            <HeaderWithBackground title={headerTitle}
                                                  subtitle={headerSubtitle}
                                                  webBackground={webHeaderBackground}
                                                  mobBackground={mobHeaderBackground}
                                                  containerStyles={{marginBottom: '14vw'}}
                            />
                            <Title title={title.toUpperCase()} containerStyles={{marginBottom: '4vw'}}/>
                            <Subtitle subtitle={subtitle} containerStyles={{marginBottom: '3vw'}}/>
                            <Description type={'light'} description={description} size={'1.23vw'}/>
                            <Submit submitForm={submit}/>
                            <ColorBlock backgroundColor={colorBlock} subtitle={colorSubtitle} title={colorTitle}/>
                            {/*<ColorBlock colorBlock={colorBlock} colorTitle={colorTitle} colorSubtitle={colorSubtitle}/>*/}
                            <EmailForm withForm={withForm} title={'Stay in the loop & never miss a thing.'}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PageGenerator;
