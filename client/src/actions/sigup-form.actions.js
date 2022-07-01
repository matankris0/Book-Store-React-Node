const signupFormActionTypes = {
    UPDATE_FIRSNAME: 'UPDATE_FIRSNAME',
    UPDATE_LASTNAME: 'UPDATE_LASTNAME',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_REPEATEDPASSWORD: 'UPDATE_REPEATEDPASSWORD',
}

export const updateFirstNameAction = (value, isValid, errorMessage) => {
    const action = {
        type: signupFormActionTypes.UPDATE_FIRSNAME,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    }
    return action
}

export const updateLastNameAction = (value, isValid, errorMessage) => {
    const action = {
        type: signupFormActionTypes.UPDATE_LASTNAME,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    }
    return action
}

export const updateEmailAction = (value, isValid, errorMessage) => {
    const action = {
        type: signupFormActionTypes.UPDATE_EMAIL,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    }
    return action
}

export const updatePasswordAction = (value, isValid, errorMessage) => {
    const action = {
        type: signupFormActionTypes.UPDATE_PASSWORD,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    }
    return action
}

export const updateRepeatedPasswordAction = (value, isValid, errorMessage) => {
    const action = {
        type: signupFormActionTypes.UPDATE_REPEATEDPASSWORD,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    }
    return action
}

export default signupFormActionTypes