import React from "react";
import styles from './style.module.scss';
import cn from "classnames";

type IProps = {
    src: string;
    title: string;
    description: string;
    size?: 'normal' | 'large',
};

const FeatureCard: React.FC<IProps> = ({ src, title, description, size }) => {
    return (
        <div className={cn(styles.featureCard, {
            [styles.large]: size === 'large',
        })}>
            <img className={styles.thumbnail}
                 src={src}
                 alt={''}
            />
            <div>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
        </div>
    );
};

FeatureCard.defaultProps = {
    size: 'normal',
};

export default FeatureCard;
