import Text from "../Text";
import Input from "../Input";
import React, {useState} from "react";
import Title from "../Title";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import emailjs from "emailjs-com";
import useValues from "../../hooks/useValues";
import Loader from "../Loader";

const OpportunitiesPeopleLeadershipEmailComponent = ({title = '', subtitle = '', description = '', imgURL =''}) => {
    const { isMobile } = useWindowDimensions();
    const [values, getProps, isFormValid, errors, clearValues] = useValues({
        name: '',
        email: '',
    });
    const [isFetching, setIsFetching] = useState(false);

    const handleSubscribe = async () => {
        if(isFormValid) {
            setIsFetching(true);
            emailjs.send(
                'service_xo07b28',
                'template_xlljnfu',
                {...values},
                'user_ILhvoG5ED9QfcW7AV2q89')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    localStorage.setItem('subscription', true);
                }, function(error) {
                    console.log('FAILED...', error);
                }).finally(() => {
                setIsFetching(false);
            })
        }
    }

    const handleOnChange = (name, value) => {
        const {onChangeText}= getProps(name);
        onChangeText(value)
    }


    return (
        <>
            <Loader isShow={isFetching} />

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
                    { !JSON.parse(localStorage.getItem('subscription')) ? <>
                        <Input placeholder={"Your name"}
                            containerStyles={{width: isMobile ? 'auto' : '45%'}}
                            mobSize={15}
                            onChange={(value) => handleOnChange('name', value)}
                            {...getProps('name')}
                        />
                        <Input
                        containerStyles={{width: isMobile ? 'auto' : '45%'}}
                        placeholder={"Email"}
                        width={"100%"}
                        onChange={(value) => handleOnChange('email', value)}
                        {...getProps('email')}
                        mobSize={15}
                        withGoButton
                        onSubmit={handleSubscribe}
                        />
                    </> : <Text  type={"kLight"} size={20}>Thank you for subscribing</Text>
                    }
                </div>
            </div>
            {imgURL ? <img src={imgURL} className={'opportunities-form-img'}/> : null}
        </section>
    </>

    )
}

export default OpportunitiesPeopleLeadershipEmailComponent
