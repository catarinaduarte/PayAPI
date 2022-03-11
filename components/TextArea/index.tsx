import React, {TextareaHTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string | undefined;
};

const TextArea: React.FC<IProps> = ({ error, children, ...props}) => {
    return (
        <div className={cn(styles.textareaWrapper, {
            [styles.error]: error,
        })}>
            <textarea className={styles.textarea}
                      {...props}
            >
                {children}
            </textarea>
            <div className={styles.errorBlock}>
                {error}
            </div>
        </div>
    );
};

export default TextArea;
