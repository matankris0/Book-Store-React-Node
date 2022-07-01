import React, { useReducer, useState, useEffect, useContext } from "react";
import './signup-page.styles.css'

import signupReducer, { SIGNUP_FORM_INITIAL_STATE } from "../../reducers/signup-form.reducer";
import * as updateAction from '../../actions/sigup-form.actions'
import { AuthContext } from "../../contexts/Auth.context";

import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword'
import { Link, useNavigate } from 'react-router-dom';

import Loader from "../../components/shared/loader/Loader.component";
import Card from "../../components/card/Card.component";
import FormInputContainer from "../../components/form/form-input-container/FormInputContainer.component";

const SignupPage = () => {
    const authContextValue = useContext(AuthContext)

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [signupFormState, dispatchSignupFormState] = useReducer(signupReducer, SIGNUP_FORM_INITIAL_STATE);
    
    const handleFirstNameInput = (event) => {
        const firstNameInput = event.target.value.toLowerCase().trim();

        if (firstNameInput === '') {
            dispatchSignupFormState(updateAction.updateFirstNameAction(firstNameInput, false, 'Please enter your firsname.'));

            return;
        };

        dispatchSignupFormState(updateAction.updateFirstNameAction(firstNameInput, true, ''));
    };

    const handleLastNameInput = (event) => {
        const lastNameInput = event.target.value.toLowerCase().trim();

        if (lastNameInput === '') {
            dispatchSignupFormState(updateAction.updateLastNameAction(lastNameInput, false, 'Please enter you lastname.'));

            return;
        };
        dispatchSignupFormState(updateAction.updateLastNameAction(lastNameInput, true, ''));
    };
    
    const handleEmailInput = (event) => {
        const emailInput = event.target.value.toLowerCase().trim();

        if (emailInput === '') {
            dispatchSignupFormState(updateAction.updateEmailAction(emailInput, false, 'Please enter an email address.'));

            return;
        };

        if (!isEmail(emailInput)) {
            dispatchSignupFormState(updateAction.updateEmailAction(emailInput, false, 'Please enter a valid email address.'));

            return;
        };
        
        dispatchSignupFormState(updateAction.updateEmailAction(emailInput, true, ''));
    };

    const handlePasswordInput = (event) => {
        const passwordInput = event.target.value.trim();

        if (passwordInput === '') {
            dispatchSignupFormState(updateAction.updatePasswordAction(passwordInput, false, 'Please enter a password.'));

            return;
        };

        if (!isStrongPassword(passwordInput, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            dispatchSignupFormState(updateAction.updatePasswordAction(passwordInput, false, 'You must enter a password with minimum 8 characters  which includes one captial letter, number and 1 special character.'))

            return;
        };

        dispatchSignupFormState(updateAction.updatePasswordAction(passwordInput, true, ''));

        return;
    };

    const handleRepeatedPasswordInput = (event) => {
        const repeatedPasswordInput = event.target.value.trim();

        if (repeatedPasswordInput === '') {
            dispatchSignupFormState(updateAction.updateRepeatedPasswordAction(repeatedPasswordInput, false, 'Please repeat your password.'));

            return;
        };

        if (repeatedPasswordInput !== signupFormState.values.password) {
            dispatchSignupFormState(updateAction.updateRepeatedPasswordAction(repeatedPasswordInput, false, "Your passwords don't match"));

            return;
        };

        dispatchSignupFormState(updateAction.updateRepeatedPasswordAction(repeatedPasswordInput, true, ''));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const signupFormValidities = signupFormState.validities;
        const signupFormValues = signupFormState.values;

        if (
            !signupFormValidities.firstName ||
            !signupFormValidities.lastName ||
            !signupFormValidities.email ||
            !signupFormValidities.password ||
            !signupFormValidities.repeatedPassword ||
            signupFormValues.firstName === '' ||
            signupFormValues.lastName === '' ||
            signupFormValues.email === '' ||
            signupFormValues.password === '' ||
            signupFormValues.repeatedPassword === ''
        ) {
            return
        };
        

        const data = {
            firstName: signupFormValues.firstName,
            lastName: signupFormValues.lastName,
            email: signupFormValues.email,
            password: signupFormValues.password,
            
        }

        try {
            const response = await fetch('http://localhost:3000/users/signup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
            console.log(response)
            if (response.status !== 201) {
                throw new Error();
            }

            const responseData = await response.json();
            const token = responseData.data.token;

            localStorage.setItem('user-token', token);
            authContextValue.setUserToken(token)

            navigate('/');
        }

        catch (err) {
            alert('Something went wrong')
        }
    };

    useEffect(() => {
        if (authContextValue.userToken) {
            navigate('/')
        }
            
        setTimeout(() => {
            setIsLoading(false);
        }, 2200);
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className='signup-page'>
            <Card className='signup-card'>
                <h1>Hello New User!</h1>
                    <form className='signup-form' onSubmit={handleSubmit}>
                    <div className="form-group">

                        <FormInputContainer
                            id='firstName'
                            type='text'
                            required={false}
                            labelText='First Name:'
                            handleInput={handleFirstNameInput}
                            isValid={signupFormState.validities.firstName}
                            errorMessage={signupFormState.errorMessages.firstName}
                        />

                        <FormInputContainer
                            id='lastName'
                            type='text'
                            required={false}
                            labelText='Lastname:'
                            handleInput={handleLastNameInput}
                            isValid={signupFormState.validities.lastName}
                            errorMessage={signupFormState.errorMessages.lastName}
                        />

                        <FormInputContainer
                            id='email'
                            type='text'
                            required={false}
                            labelText='Email:'
                            handleInput={handleEmailInput}
                            isValid={signupFormState.validities.email}
                            errorMessage={signupFormState.errorMessages.email}
                        />

                        <FormInputContainer
                            id='password'
                            type='password'
                            required={false}
                            labelText='Password:'
                            handleInput={handlePasswordInput}
                            isValid={signupFormState.validities.password}
                            errorMessage={signupFormState.errorMessages.password}
                        />

                        <FormInputContainer
                            id='repeat-password'
                            type='password'
                            required={false}
                            labelText='Repeat Password:'
                            handleInput={handleRepeatedPasswordInput}
                            isValid={signupFormState.validities.repeatedPassword}
                            errorMessage={signupFormState.errorMessages.repeatedPassword}
                        />

                            <Link to="/login" className="login-link">
                                Have an account? Log in here </Link>

                        <button type="submit">Signup</button>
                    </div>

                </form>
                </Card>
        </main>
    )
}

export default SignupPage