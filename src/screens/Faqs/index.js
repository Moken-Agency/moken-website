import React from "react";
import HeaderSecondType from "../../components/HeaderSecondType";
import options from "./options";
import FaqComponent from "./FaqComponent";
import './index.scss';
import EmailForm from "../../components/EmailForm";

const Faqs = () => {
    return (
        <div className={'faqs-container'}>
           <HeaderSecondType title={'FREQUENTLY ASKED QUESTIONS'} subtitle={'FAQs'} />
            <div className={'faqs-list-container'}>
                {
                    options.faqsList.map((faqItem, index) => (
                        <FaqComponent key={'FaqComponent' + index} {...faqItem} isLast={index === options.faqsList.length - 1}/>
                    ))
                }
            </div>

            <EmailForm withForm />
        </div>
    )
}

export default Faqs
