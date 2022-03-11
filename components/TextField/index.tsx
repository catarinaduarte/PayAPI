import React, {InputHTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | undefined;
}

const TextField: React.FC<IProps> = ({ error, ...props }) => {
    return (
        <div className={cn(styles.textField, {
            [styles.error]: error,
        })}>
            <input className={styles.input}
                   {...props}
            />
            <div className={styles.errorBlock}>
                {error}
            </div>
        </div>
    );
};

export default TextField;
