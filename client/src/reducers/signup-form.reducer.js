import signupFormActionTypes from '../actions/sigup-form.actions.js'

export const SIGNUP_FORM_INITIAL_STATE = {
    values: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatedPassword: '',
    },

    validities: {
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        repeatedPassword: true,
    },

    errorMessages: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatedPassword: '',
    },
}

const signupReducer = (state, action) => {
    switch (action.type) {

        case signupFormActionTypes.UPDATE_FIRSNAME: {
            const updatedFirstNameValue = action.payload.value
            const updatedIsFirstNameValid = action.payload.isValid
            const updatedFirstNameErrorMessage = action.payload.errorMessage

            const updatedValues = {...state.values, firstName: updatedFirstNameValue}
            const updatedValidities = {...state.validities, firstName: updatedIsFirstNameValid}
            const updatedErrorMessages = {...state.errorMessages, firstName: updatedFirstNameErrorMessage}

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages
            }

            return updatedState
        }

        case signupFormActionTypes.UPDATE_LASTNAME: {
            const updatedLastNameValue = action.payload.value
            const updatedIsLastNameValid = action.payload.isValid
            const updatedLastNameErrorMessage = action.payload.errorMessage

            const updatedValues = {...state.values, lastName: updatedLastNameValue}
            const updatedValidities = {...state.validities, lastName: updatedIsLastNameValid}
            const updatedErrorMessages = {...state.errorMessages, lastName: updatedLastNameErrorMessage}

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages
            }

            return updatedState
        }

        case signupFormActionTypes.UPDATE_EMAIL: {
            const updatedEmailValue = action.payload.value
            const updatedIsEmailValid = action.payload.isValid
            const updatedEmailErrorMessage = action.payload.errorMessage

            const updatedValues = {...state.values, email: updatedEmailValue}
            const updatedValidities = {...state.validities, email: updatedIsEmailValid}
            const updatedErrorMessages = {...state.errorMessages, email: updatedEmailErrorMessage}

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages
            }

            return updatedState
        }

        case signupFormActionTypes.UPDATE_PASSWORD: {
            const updatedPasswordValue = action.payload.value
            const updatedPasswordValid = action.payload.isValid
            const updatedPasswordErrorMessage = action.payload.errorMessage

            const updatedValues = {...state.values, password: updatedPasswordValue}
            const updatedValidities = {...state.validities, password: updatedPasswordValid}
            const updatedErrorMessages = {...state.errorMessages, password: updatedPasswordErrorMessage}

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
            }

            return updatedState
        }

        case signupFormActionTypes.UPDATE_REPEATEDPASSWORD: {
            const updatedRepeatedPasswordValue = action.payload.value
            const updatedRepeatedPasswordValid = action.payload.isValid
            const updatedRepeatedPasswordErrorMessage = action.payload.errorMessage

            const updatedValues = {...state.values, repeatedPassword: updatedRepeatedPasswordValue}
            const updatedValidities = {...state.validities, repeatedPassword: updatedRepeatedPasswordValid}
            const updatedErrorMessages = {...state.errorMessages, repeatedPassword: updatedRepeatedPasswordErrorMessage}

            const updatedState = {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
            }

            return updatedState
        }
        default: { return state }
    }
}

export default signupReducer