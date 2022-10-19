import React from 'react';
import style from './Buttons.module.scss';


interface PrimaryButtonProps {
    children: string,
    backgroundColor?: string,
    isInputButton?: boolean,
    type?: any
}


const PrimaryButton = ({children, backgroundColor, isInputButton, type}: PrimaryButtonProps) => {

    let className;

    if (isInputButton) {
        className = style.primaryButton__input
    } else {
        className = style.primaryButton
    }

    return (
        <button className={className}
                type={type}
                style={{
                    backgroundColor: backgroundColor,
                    color: backgroundColor ? "black" : "white",
                }}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;