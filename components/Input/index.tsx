import React, {InputHTMLAttributes} from 'react';
import styles from './style.module.scss';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
    return (
        <input className={styles.input}
               {...props}
        />
    );
};

export default Input;
