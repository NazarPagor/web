import React from 'react';
import style from './Inputs.module.scss';

interface InputProps {
    id: string,
    name: string,
    type?: string,
    label: string,
    onChange: any,
    value: any,
    htmlFor: string,
}


const FormInput = ({id, name, type, onChange, value, label, htmlFor}: InputProps) => {
    return (
        <div className={style.input_block}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};


export const FormTextarea = ({id, name, onChange, value, label, htmlFor}: InputProps) => {
    return (
        <div className={style.input_block}>
            <label htmlFor={htmlFor}>{label}</label>
            <textarea
                id={id}
                name={name}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};


export default FormInput;