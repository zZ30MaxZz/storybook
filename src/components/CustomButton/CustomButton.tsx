import React from 'react';
import styles from './customButton.module.scss';


type typeButton = 'primary' | 'secondary' | 'tertiary' | 'transparent'
type sizeButton = 'small' | 'medium' | 'large'

export interface ButtonProps {
    typeButton: typeButton;
    size?: sizeButton;
    backgroundColor?: string;
    label: string;
    onClick?: () => void;
}

export const CustomButton = ({
    typeButton,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={`${styles.button} ${styles[typeButton]} ${styles[size]}`}
            {...props}
        >
            {label}
        </button>
    )
}
