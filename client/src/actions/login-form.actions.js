const loginFormActionType = {
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
}


export const updateEmailAction = (value, isValid, errorMessage) => {
    const action = {
        type: loginFormActionType.UPDATE_EMAIL,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    };

    return action;
};


export const updatePasswordAction = (value, isValid, errorMessage) => {
    const action = {
        type: loginFormActionType.UPDATE_PASSWORD,
        payload: {
            value: value,
            isValid: isValid,
            errorMessage: errorMessage,
        },
    };

    return action;
};

export default loginFormActionType