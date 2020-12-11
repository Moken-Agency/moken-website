import React, {useState} from 'react';
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import ArrowButton from '../../../../images/arrow-left.jpg';
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import './index.scss';

const Package = ({title, subtitle, firstColumn, secondColumn, thirdColumn}) => {
    const {isMobile} = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);

    const imgStyles = {
        height: '1.5vw',
        transform: `rotate(${isOpen ? '-' : ''}90deg)`,
        position: 'relative',
        transition: '.5s',
        top: '.3vw',
        left: '.5vw'
    };

    const hiddenDynamicStylesWeb = {
        visibility: isOpen ? 'visible' : 'hidden',
        transition: '.5s',
        opacity: isOpen ? 1 : 0,
        height: isOpen ? 'auto' : 0,
        padding: isOpen ? '5vw 4vw' : 0
    }
    const hiddenDynamicStylesMob = {
        visibility: isOpen ? 'visible' : 'hidden',
        transition: '.5s',
        opacity: isOpen ? 1 : 0,
        height: isOpen ? 'auto' : 0,
    }

    const textStylesMob = {
        marginLeft: '3vw',
        fontSize: '4vw'
    }

    const hiddenDynamicStyles = isMobile ? hiddenDynamicStylesMob : hiddenDynamicStylesWeb;

    const returnAdditionalBtnComponent = () => {
        return isMobile ?
            <span style={textStylesMob}>{isOpen ? '-' : '+'}</span> :
            <img src={ArrowButton} style={imgStyles}/>
    }

    return (
        <div className={'package-container'}>
            <div className={'package-top-container'}>
                <div>
                    <Text type={'semiBold'} mobSize={12} size={16} textStyles={{letterSpacing: isMobile ? 3 : 4}}>{title}</Text>
                    <Text type={'extraLight'} size={55} mobSize={33}>{subtitle}</Text>
                </div>
                <div className={'package-button-container'}>
                  <Button title={'VIEW PACKAGE'}
                          color={'white'}
                          size={'.9vw'}
                          onClick={() => setIsOpen(!isOpen)}
                          additionalComponent={returnAdditionalBtnComponent}
                          a={imgStyles}/>
                  <Button title={'SELECT THIS PACKAGE'} color={'black'}/>
              </div>
            </div>

            <div className={'opened-container'} style={hiddenDynamicStyles}>
            <div className={'w30per mob-width-container'}>
                {
                    firstColumn.data.map(({title, descriptions = []}, index) => {
                        return (
                            <div className={'description'}>
                                <Text size={14}
                                      mobSize={10}
                                      type={'semiBold'}
                                      containerStyles={{
                                          marginBottom: isMobile ? '8vw' : '1vw',
                                      }}
                                      textStyles={{
                                          letterSpacing: isMobile ? 3 : 4
                                      }}>
                                    {title}
                                </Text>
                                <div className={'descriptions'}>
                                    {
                                        descriptions.map(({title}, index) => {
                                            return (
                                                <Text key={'packages descriptions'+ title + index}
                                                      size={20}
                                                      containerStyles={{
                                                          marginBottom: isMobile ? '2vw' : '1vw',
                                                      }}
                                                      type={'light'}>{title}</Text>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div className={'w30per mob-width-container'}>
                {
                    secondColumn.data.map(({title, descriptions = []}, index) => {
                        return (
                            <div
                                 className={'description'}
                                 key={'secCol packeges' + title + index}>
                                <Text size={14}
                                      mobSize={10}
                                      type={'semiBold'}
                                        containerStyles={{
                                            marginBottom: isMobile ? '8vw' : '1vw',
                                        }}
                                        textStyles={{
                                            letterSpacing: isMobile ? 3 : 4
                                        }}
                                >
                                    {title}
                                </Text>
                                <div className={'descriptions'}>
                                    {
                                        descriptions.map(({title}, index) => {
                                            return (
                                                <Text size={20}
                                                      type={'light'}
                                                      containerStyles={{
                                                          marginBottom: isMobile ? '2vw' : '1vw',
                                                      }}
                                                      key={'packages descriptions'+ title + index}>
                                                    {title}
                                                </Text>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={'third-column-package'}>
                {
                    thirdColumn.data.map(({title, withSubtitle, subtitle}, index) => {
                        return (
                            <div style={{marginBottom: '2vw'}}
                                 key={'third col package' + title + index}>
                                {withSubtitle ?
                                    <Text type={'semiBold'}
                                          size={14}
                                          mobSize={10}
                                          textStyles={{letterSpacing: 4}}
                                    >{subtitle}</Text> : null}
                                <Text size={55} mobSize={35} type={'extraLight'}>
                                    {title}
                                </Text>
                            </div>
                        )
                    })
                }
            </div>
        </div>

            <div style={{display: "flex", justifyContent: 'center'}}>
                <Button containerStyles={{display: isMobile ? 'block' : 'none'}}
                        title={'SELECT THIS PACKAGE'}
                        color={'black'}/>
            </div>

        </div>
    )
}

export default Package;
