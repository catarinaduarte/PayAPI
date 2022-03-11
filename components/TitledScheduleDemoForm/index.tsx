import React from "react";
import styles from './style.module.scss';
import ScheduleDemoFormContainer from "../../containers/ScheduleDemoFormContainer";

type IProps = {
    title?: string;
};

const TitledScheduleDemoForm: React.FC<IProps> = ({ title }) => {
    return (
        <div className={styles.scheduleDemoFormWrapper}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <ScheduleDemoFormContainer className={styles.scheduleDemoContainer}/>
        </div>
    );
};

TitledScheduleDemoForm.defaultProps = {
    title: 'Ready to start?',
};

export default TitledScheduleDemoForm;
