import React from 'react';
import Title from "../Title";
import Description from "../Description";
import Subtitle from "../Subtitle";
import './index.scss';
import ColorBlock from "./components/ColorBlock";
import Submit from "./components/Submit";
import EmailForm from "./components/EmailForm";

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
                            <ColorBlock colorBlock={colorBlock} colorTitle={colorTitle} colorSubtitle={colorSubtitle}/>
                            <EmailForm withForm={withForm} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PageGenerator;
