import React, {InputHTMLAttributes} from "react";
import styles from './style.module.scss';

const CheckBox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ id, children , ...props}) => {
    return (
        <label className={styles.label}
               htmlFor={id}
        >
            <div className={styles.inputWrapper}>
                <input className={styles.input}
                       {...props}
                       id={id}
                       type={'checkbox'}
                />
            </div>

            {children}
        </label>
    );
};

export default CheckBox;
