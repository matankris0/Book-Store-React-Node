import React, { useState, useReducer, useEffect, useContext } from "react";
import './login-page.styles.css'

import loginReducer, { LOGIN_FORM_INITIAL_STATE } from "../../reducers/login-form.reducer";
import { updateEmailAction, updatePasswordAction } from "../../actions/login-form.actions";
import { AuthContext } from "../../contexts/Auth.context";

import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword'
import { Link, useNavigate } from 'react-router-dom';

import Loader from "../../components/shared/loader/Loader.component";
import Card from "../../components/card/Card.component";
import FormInputContainer from "../../components/form/form-input-container/FormInputContainer.component";

const LoginPage = () => {

    const authContextValue = useContext(AuthContext)

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    const [loginFormState, dispatchLoginFormState] = useReducer(loginReducer, LOGIN_FORM_INITIAL_STATE);

    const handleEmailInput = (event) => {
        const emailInput = event.target.value.toLowerCase().trim()

        if (emailInput === '') {
            dispatchLoginFormState(updateEmailAction(emailInput, false, 'Please enter an email address.'))

            return
        }

        if (!isEmail(emailInput)) {
            dispatchLoginFormState(updateEmailAction(emailInput,false, 'Please enter a valid email address.'))

            return
        }
        
        dispatchLoginFormState(updateEmailAction(emailInput, true, ''))
    }

    const handlePasswordInput = (event) => {
        const passwordInput = event.target.value.trim()

        if (passwordInput === '') {
            dispatchLoginFormState(updatePasswordAction(passwordInput, false, 'Please enter a password.'))

            return
        }

        if (!isStrongPassword(passwordInput, { minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
                dispatchLoginFormState(updatePasswordAction(passwordInput, false, 'You must enter a password with at least 8 characters and must contain uppercase and lowercase letters, at least 1 number and 1 symbol (@,!,*...).'))

            return
        }

        dispatchLoginFormState(updatePasswordAction(passwordInput, true, ''))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginFormValidities = loginFormState.validities;
        const loginFormValues = loginFormState.values;

        if (loginFormValues.email === '' || loginFormValues.password === '' || !loginFormValidities.email || !loginFormValidities.password)

        {return};
        const data = {
            email: loginFormValues.email,
            password: loginFormValues.password,
        };

        try {
            const response = await fetch('http://localhost:3000/users/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
            console.log(response)
            if (!response.ok) {
                throw new Error();
            };

            const responseData = await response.json();
            const token = responseData.data.token;

            localStorage.setItem('user-token', token);
            authContextValue.setUserToken(token)

            navigate('/');
        }

        catch (err) {
            alert('Something went wrong')
        };
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
        <main className="login-page">
            <Card className="login-card">
                <h1>Welcome Back!</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">

                        <FormInputContainer
                            id='email'
                            type='text'
                            required='required'
                            labelText='Email:'
                            handleInput={handleEmailInput}
                            isValid={loginFormState.validities.email}
                            errorMessage={loginFormState.errorMessages.email}
                        />

                        <FormInputContainer
                            id='password'
                            type='password'
                            required='required'
                            labelText='Password:'
                            handleInput={handlePasswordInput}
                            isValid={loginFormState.validities.password}
                            errorMessage={loginFormState.errorMessages.password}
                        />

                        <Link to="/signup" className="signup-link">Don't have an account yet? Sign up here</Link>

                        <button type="submit">Login</button>
                    </div>
                </form>
            </Card>
        </main>
    )
}

export default LoginPage