import React from "react";
import styles from "./style.module.scss";

type IProps = {
    title: string;
    description: string;
};

const DescriptionCard: React.FC<IProps> = ({ title, description }) => {
    return (
        <div className={styles.descriptionCard}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};

export default DescriptionCard;
