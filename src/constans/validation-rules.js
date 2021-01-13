const checkShortLongTrip = (values) => {
  if (
    values.longestPossibleTrip < values.shortestPossibleTrip &&
    values.longestPossibleTrip !== 0
  ) {
    return {
      shortestPossibleTrip: "Shortest trip cannot be more than longest trip",
    };
  }
};

const firstNameValidation = ({ formatted }) => {
  if (!formatted) {
    return { firstName: "First Name is required" };
  }
};

const lastNameValidation = ({ formatted }) => {
  if (!formatted) {
    return { lastName: "Last Name is required" };
  }
};

const emailValidation = (value) => {
  if (!value) {
    return { email: "Email is required" };
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      value
    )
  ) {
    return { email: "Invalid email address" };
  }
};

const passwordValidation = ({ formatted }) => {
  if (!formatted) {
    return { password: "Password is required" };
  } else if (formatted.length < 6) {
    return { password: "Password must be at least 6 characters" };
  }
};

const birthdayValidation = ({ formatted }) => {
  if (!formatted) {
    return { birthday: "Birthday is required" };
  }
};

const cardName = ({ formatted }) => {
  if (!{ formatted }) {
    return { cardName: "Card name is required" };
  }
};

const cardNumber = ({ extracted }) => {
  if (!extracted) {
    return { cardNumber: "Card Number name is required" };
  } else if (extracted.length !== 16) {
    return { cardNumber: "Card Number be at least 16 characters" };
  }
};

const expDate = ({ formatted }) => {
  if (!formatted) {
    return { expDate: "Expire date name is required" };
  }
};

const cvv = ({ formatted }) => {
  if (!formatted) {
    return { cvv: "CVV is required" };
  } else if (formatted.length > 3) {
    return { cvv: "CVV must be at least 3 characters" };
  }
};

const countryCode = (code) => {
  if (!code) {
    return { countryCode: "Country Code is required" };
  }
};

const phoneNumber = ({ extracted }) => {
  if (!extracted) {
    return { phoneNumber: "Phone Number Code is required" };
  } else if (extracted.length < 8) {
    return { phoneNumber: "Phone Number must be at least 8 characters" };
  }
};

const zipCode = ({ formatted }) => {
  if (!formatted) {
    return { zipCode: "Zip Code is required" };
  } else if (formatted.length < 2) {
    return { zipCode: "Zip Code must be at least 3 characters and more" };
  }
};

export const loginAuth = (values) => {
  return {
    ...passwordValidation(values.password),
    ...emailValidation(values.email),
  };
};

const signUpValidation = (values) => {
  return {
    ...passwordValidation(values.password),
    ...emailValidation(values.email),
    ...firstNameValidation(values.firstName),
    ...lastNameValidation(values.lastName),
    // ...birthdayValidation(values.birthday),
  };
};

const checkingRequired = (key, value, label) => {
  if (value === undefined || value === null || value === "") {
    return { [key]: `${label} is required` };
  }
};

const checkMinMaxValue = (min, max, value, keyValue) => {
  if (value < min || value > max) {
    return {
      [keyValue]: `This value should be min ${min} and max ${max} characters!`,
    };
  }
};

const birthChecking = (key, data) => {
  if (data.length < 14) {
    return { [key]: "Not valid" };
  } else {
    const birthArray = data.split("/").map((el) => +el.trim());

    if (birthArray[0] < 1940 || birthArray[0] > new Date().getFullYear() - 18) {
      return { [key]: "Year is not valid!" };
    }
    if (birthArray[1] > 12 || birthArray[1] === 0) {
      return { [key]: "Month not valid!" };
    }
    if (birthArray[2] > 31 || birthArray[2] === 0) {
      return { [key]: "Day not valid!" };
    }
  }
};

const checkOnLength = (value, key, length, label) => {
  if (value) {
    if (value.length < length) {
      return { [key]: `${label} must be ${length} ` };
    }
  } else {
    return { [key]: `${label} field is require` };
  }
};

const checkEqual = (first, second, key, equalLabel, equalToLabel) => {
  if (first && second && first !== second) {
    return { [key]: `${equalLabel} is not equal to ${equalToLabel}` };
  }
};

const sendEmailValidation = (values) => {
  console.log({ values });
  return {
    ...emailValidation(values.email),
  };
};

export default {
  emailValidation,
  loginAuth,
  signUpValidation,
  sendEmailValidation,
};
