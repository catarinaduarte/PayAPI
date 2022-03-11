import React from "react";
import styles from './style.module.scss';

const CompanySummary: React.FC = () => {
    return (
        <ul className={styles.companySummary}>
            <li className={styles.item}>
                <div className={styles.label}>
                    Team Members
                </div>
                <div className={styles.value}>
                    300+
                </div>
            </li>
            <li className={styles.item}>
                <div className={styles.label}>
                    Offices in the US
                </div>
                <div className={styles.value}>
                    3
                </div>
            </li>
            <li className={styles.item}>
                <div className={styles.label}>
                    Transactions analyzed
                </div>
                <div className={styles.value}>
                    10M+
                </div>
            </li>
        </ul>
    );
};

export default CompanySummary;
