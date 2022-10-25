import React from 'react';
import style from './Buttons.module.scss';


interface PrimaryButtonProps {
    children: string,
    backgroundColor?: string,
    isInputButton?: boolean,
    type?: any
}


const PrimaryButton = ({children, backgroundColor, isInputButton, type}: PrimaryButtonProps) => {

    let className = style.primaryButton;

    if (isInputButton) {
        className = style.primaryButton__input
    }
    if (backgroundColor === "white") {
        className = style.whiteButton
    }

    return (
        <button className={className}
                type={type}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;