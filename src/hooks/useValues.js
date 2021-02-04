import { useCallback, useState } from 'react';
const fields = {
    email: (value) => {
        if (!value) {
            return 'Email field is required';
        }
        if (
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                value,
            )
        ) {
            return 'Not valid email';
        }
    },
    companyName: (value) => {
        if (!value) {
            return 'Company name field is required';
        }
    },
    subject: (value) => {
        if (!value) {
            return 'Subject field is required';
        }
    },
    message:(value) => {
        if (!value) {
            return 'Message field is required';
        } else if(value.length < 10) {
            return 'Message length must be minimum 10 characters'
        }

    },
    individualEmail: (value) => {
        if (!value) {
            return '';
        }
        if (
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                value,
            )
        ) {
            return '';
        }
    },
    contactEmail: (value) => {
        if (!value) {
            return '';
        }
        if (
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                value,
            )
        ) {
            return '';
        }
    },
    password: (value) => {
        if (!value) {
            return '';
        }
        if (value.length < 6) {
            return '';
        }
    },


    choosePassword: (value) => {
        if (!value) {
            return '';
        }
        if (value.length < 6) {
            return '';
        }
    },
    name: (value) => {
        if (!value) {
            return 'Name field is required';
        }
        if (value.length < 3) {
            return 'Name field should has minimum 3 characters';
        }
    },

};

export const validate = (fieldName, value, values = {}) =>
    fields[fieldName] ? fields[fieldName](value, values) : '';



const propsByName = {
    email: {
      type: 'email'
    },
    password: {
        type: 'password',
        iconName: 'icEye',
    },
    choosePassword: {
        secureTextEntry: false,
        iconName: 'icEye',
    },
    recoveryChoosePassword: {
        secureTextEntry: false,
        iconName: 'icEye',
    },
    confirmPassword: {
        secureTextEntry: false,
        iconName: 'icEye',
    },
    phoneNumber: {
        keyboardType: 'numeric',
        mask: '+1 ([000]) [000] [00] [00]',
    },
    phone: {
        keyboardType: 'numeric',
        mask: '+1 ([000]) [000] [00] [00]',
    },
    description: {
        multiline: true,
        label: 'Project Description',
        fontSize: 13,
    },
    answer: {
        multiline: true,
        label: 'Answer',
        fontSize: 13,
    },
    reason: {
        multiline: true,
        fontSize: 16,
    },
    numberOfDays: {
        mask: '[00] days',
        fontSize: 16,
    },
    disputeDescription: {
        multiline: true,
        label: 'Description',
        fontSize: 17,
    },
    contactPhoneNumber: {
        mask: '+1 ([000]) [000] [00] [00]',
        label: 'Contact phone number',
        keyboardType: 'numeric',
    },
    contactEmail: {
        label: 'Contact email',
    },
    cardNumber: {
        mask: '[0000] [0000] [0000] [0000]',
        keyboardType: 'numeric',
    },
    expirationDate: {
        mask: '[00]/[00]',
        keyboardType: 'numeric',
        containerStyle: {
            width: '50%',
        },
    },
    routingNumber: {
        mask: '[000000000]',
        keyboardType: 'numeric',
    },
    accountNumber: {
        mask: '[000000000000]',
        keyboardType: 'numeric',
    },
    zip: {
        mask: '[00000]',
        keyboardType: 'numeric',
    },
    cvc: {
        mask: '[000]',
        containerStyle: {
            width: '40%',
        },
    },
    serviceRadius: {
    },
    currency: {
    },
    dateOfBirth: {
        renderDataType: 'rounded',
    },
    transitNumber: {
        mask: '[0000] [0000] [0000] [0000]',
        keyboardType: 'numeric',
    },
    cvv: {
        mask: '[000]',
        keyboardType: 'numeric',
    },
    expiryDate: {
        mask: '[00] / [00]',
        keyboardType: 'numeric',
    },
};



const getInitialErrors =(initialValues) => {
    return Object.keys(initialValues).reduce((acc, key) => {
        acc[key] = '';
        return acc;
    }, {});
};

export default (
    initialValues,
    localeSections,
) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(getInitialErrors(initialValues));

    const setValuesError = useCallback(
        (fieldName, error)=>
            setErrors((prevState) => {
                const copy = { ...prevState };
                copy[fieldName] = error || '';
                return copy;
            }),
        [],
    );

    const handleChange = useCallback(

        (fieldName) => (e, extracted) => {
            console.log({fieldName});
            e.persist()
            if (errors[fieldName]) {
                const error = validate(fieldName, e.target.value, values);
                if (!error || error !== errors[fieldName]) {
                    setValuesError(fieldName, error);
                }
            }
            console.log(e.target.value);
            setValues((prevState) => {
                const copy = { ...prevState };
                copy[fieldName] =  e.target.value;
                return copy;
            });
        },
        [errors],
    );

    const onBlur = useCallback(
        (fieldName) => () => {
            const error = validate(fieldName, values[fieldName], values);
            if (error) {
                setValuesError(fieldName, error);
            }
        },
        [values],
    );

    const getProps = (fieldName) => {
        return {
            ...propsByName[fieldName],
            key: fieldName,
            onChange: handleChange(fieldName),
            onBlur: onBlur(fieldName),
            errorMessage: errors[fieldName],
        };
    };

    const onChangeText = (fieldName) => handleChange(fieldName);

    const isFormValid = Object.entries(values).every(
        ([fieldName, value]) => !validate(fieldName, value, values),
    );

    return [values, getProps, isFormValid, errors];
};
