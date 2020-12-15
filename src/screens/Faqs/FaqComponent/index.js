import React, {useState} from "react";
import Text from "../../../components/Text";
import './index.scss';

const FaqComponent = ({title, faqs = [], isLast = false}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenFaq = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`faq-component-container ${isLast ? 'faq-last' : ''}`}>
            <div className={'faq-component-title-container'}>
                <Text type={'extraLight'}
                      size={55}
                      mobSize={35}
                    className={'faq-component-title'}>{title}</Text>
                <button onClick={handleOpenFaq}>
                    <Text size={100} type={'thin'} mobSize={65}>{isOpen ? '-' : '+'}</Text>
                </button>
            </div>
            <div className={`faq-component-list-container ${!isOpen ? 'faq-component-closed' : ''}`}>
                {
                    faqs.map((faq, index) => {
                        return (
                            <Text key={'FaqComponentText' + index}
                                  className={'faq-component-list-item'}
                                  type={'light'}
                                  size={20}
                                  mobSize={16}
                            >{faq}</Text>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default FaqComponent
