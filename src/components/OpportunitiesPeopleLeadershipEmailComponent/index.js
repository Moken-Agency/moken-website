import Text from "../Text";
import Input from "../Input";
import React from "react";
import Title from "../Title";
import './index.scss';

const OpportunitiesPeopleLeadershipEmailComponent = ({title = '', subtitle = '', description = '', imgURL =''}) => {
    return (
        <>
        <Title
            title={title}
        />
        <section className={"opportunities-form-container"}>
            <div className={"opportunities-form-left-container"}>
                <Text
                    size={"3vw"}
                    animationType={"fade-in"}
                    subtitle={"Not exactly what you were looking for?"}
                    type={"extraLight"}
                    className={"subtitle"}
                >
                    {subtitle}
                </Text>
                <Text
                    type={"light"}
                    animationType={"fade-in"}
                    size={"1.2vw"}
                    className={"left-second-title"}
                >
                    {description}
                </Text>
                <div className={"input-container"}>
                    <Input placeholder={"Your name"} c
                           containerStyles={{width: '45%'}}
                           mobSize={15} />
                    <Input
                        containerStyles={{width: '45%'}}
                        placeholder={"Email"}
                        width={"100%"}
                        mobSize={15}
                        withGoButton
                    />
                </div>
            </div>
            {imgURL ? <img src={imgURL} className={'opportunities-form-img'}/> : null}
        </section>
    </>

    )
}

export default OpportunitiesPeopleLeadershipEmailComponent
