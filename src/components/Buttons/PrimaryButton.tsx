import React from 'react';
import style from './Buttons.module.scss';


interface PrimaryButtonProps {
    children: string,
    backgroundColor?: string,
}


const PrimaryButton = ({children}: PrimaryButtonProps) => {

    return (
        <button className={style.primaryButton}>
            {children}
        </button>
    );
};

export default PrimaryButton;