import React, { useState, useEffect } from "react";

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = ({ name, text }) => {
    setValues({
      ...values,
      [name]: text,
    });
  };

  const handleSubmit = (callback) => {
    console.log({ callback });
    const validationErrors = validate ? validate(values) : {};
    setSubmitting(true);
    setErrors(validationErrors);
    if (
      typeof callback === "function" &&
      Object.keys(validationErrors).length === 0
    ) {
      callback();
    }
  };

  return { handleSubmit, handleChange, values, errors, isSubmitting };
};

export default useFormValidation;
