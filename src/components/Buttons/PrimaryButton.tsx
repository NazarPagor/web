import React from 'react';
import style from './Buttons.module.scss';


interface PrimaryButtonProps {
    children: string,
    backgroundColor?: string,
    isInputButton?: boolean,
}


const PrimaryButton = ({children, backgroundColor, isInputButton}: PrimaryButtonProps) => {

    let className;

    if (isInputButton){
        className = style.primaryButton__input
    }
    else{
        className = style.primaryButton
    }

    return (
        <button className={className}
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