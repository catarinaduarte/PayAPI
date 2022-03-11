import React, {ButtonHTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variants?: 'primary' | 'secondary' | undefined;
    color?: 'light' | 'dark';
};

const Button: React.FC<IProps> = ({ variants, color, children, ...props }) => {
    return (
        <button className={cn(styles.button, {
            [styles.secondary]: variants === 'secondary',
            [styles.light]: color === 'light',
            [styles.dark]: color === 'dark',
        })}
                {...props}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    variants: 'primary',
    color: 'light',
};

export default Button;
