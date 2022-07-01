import React from "react";
import './form-input-container.styles.css'
import FormInputText from "../form-input-text/FormInputText.component";
import FormLabel from "../form-label/FormLabel.component";

const FormInputContainer = (props) => {
    return (

        <div className="form-input-container">

            <FormLabel htmlFor={props.id} text={props.labelText}/>

            <FormInputText id={props.id} type={props.type} required={props.required} handleInput={props.handleInput}/>

            {!props.isValid && <div className="error-message">{props.errorMessage}</div>}

            </div>
    )
}

export default FormInputContainer