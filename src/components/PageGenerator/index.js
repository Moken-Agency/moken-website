import React from 'react';
import Title from "../Title";
import Description from "../Description";
import Subtitle from "../Subtitle";
import './index.scss';
import ColorBlock from "../ColorBlock";
import Submit from "./components/Submit";
import EmailForm from "../EmailForm";

const PageGenerator = ({data}) => {
    return (
        <div className={'page-generator-container'}>
            {
                data.map(({title, subtitle, description, colorBlock, colorTitle, colorSubtitle, submit, withForm}, index) => {
                    return (
                        <div key={'page-generator-container' + index}>
                            <Title title={title} />
                            <Subtitle subtitle={subtitle}/>
                            <Description description={description}/>
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
