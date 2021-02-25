import Title from "../Title";
import Subtitle from "../Subtitle";
import Opportunity from "../Oppurtunity";
import Text from "../Text";
import React from "react";
import './index.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Button from "../Button";

const TitleShortListWithBtn = ({title = '',listItemBtnTitle = '', subtitle = '', list, btnTitle, btnOnClick, btnType, containerStyles = {}}) => {

    const { isMobile } = useWindowDimensions();

    return (
        <section className={"title-short-list-with-btn-section"} style={containerStyles} onClick={btnOnClick}>
            <Title className={"title-short-list-with-btn-title"} title={title} />
            <div className={"title-short-list-with-btn-container"}>
                <Subtitle
                    subtitle={subtitle}
                    mobSize={35}
                    className={"title-short-list-with-btn-subtitle"}
                />
                <div className={"title-short-list-with-btn-opportunities-container"}>
                    {list.map((listItem, index) => {
                        return (
                            <Opportunity
                                btnTitle={listItemBtnTitle}
                                width={isMobile ? "auto" : "39vw"}
                                {...listItem}
                                key={index + listItem.title}
                            />
                        );
                    })}
                    {btnType === 'default' ? <
                        Button title={btnTitle}
                               containerStyles={{marginTop: 100}}
                        /> :
                    <Text
                        size={22}
                        type={"kSemiBold"}
                        animationType={"fade-in"}
                        className={"text-submit"}
                    >
                        {btnTitle}
                    </Text>
                    }
                </div>
            </div>
        </section>
    )
}

export default TitleShortListWithBtn
