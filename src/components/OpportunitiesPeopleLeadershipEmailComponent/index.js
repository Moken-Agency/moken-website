import Text from "../Text";
import Input from "../Input";
import React from "react";
import Title from "../Title";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const OpportunitiesPeopleLeadershipEmailComponent = ({title = '', subtitle = '', description = '', imgURL =''}) => {
    const { isMobile } = useWindowDimensions();

    return (
        <>
        <Title
            title={title}
        />
        <section className={"opportunities-form-container"}>
            <div className={"opportunities-form-left-container"}>
                <Text
                    size={50}
                    animationType={"fade-in"}
                    subtitle={"Not exactly what you were looking for?"}
                    type={"kBold"}
                    mobSize={35}
                    // type={"extraLight"}
                    className={"subtitle"}
                >
                    {subtitle}
                </Text>
                <Text
                    type={"kLight"}
                    // type={"light"}
                    animationType={"fade-in"}
                    size={20}
                    mobSize={16}
                    className={"left-second-title"}
                    containerStyles={{lineHeight: '30px'}}
                >
                    {description}
                </Text>
                <div className={"input-container"}>
                    <Input placeholder={"Your name"} c
                           containerStyles={{width: isMobile ? 'auto' : '45%'}}
                           mobSize={15}
                           value={''}
                    />
                    <Input
                        containerStyles={{width: isMobile ? 'auto' : '45%'}}
                        placeholder={"Email"}
                        width={"100%"}
                        mobSize={15}
                        value={''}
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
