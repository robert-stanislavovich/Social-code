import React from "react";
import s from "./formControls.module.css"
import {Field} from "redux-form";

export const FormControl =({input, meta, child, ...props})=>{
    const hasError = meta.touched && meta.error
    return <div className={s.formcontrol + "" + (hasError ? s.error : "")}>
        <div>
            {props.children}
        </div>
        {hasError && <div>{meta.error}</div>}
    </div>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input className={s.inputlogin} {...input} {...restProps}/></FormControl>

}
export const InputProfileData = (props) => {
    const {input, meta, child, ...restProps} = props
    return <span><FormControl {...props}><input {...input} {...restProps}/></FormControl></span>

}
export const TextAreaProfileData = (props) => {
    const {input, meta, child, ...restProps} = props
    return <span><FormControl {...props}><textarea {...input} {...restProps}/></FormControl></span>

}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (    <span>
        <Field placeholder={placeholder}
               name={name}
               validators={validators}
               component={component}
            {...props} />
        {text}
    </span>)