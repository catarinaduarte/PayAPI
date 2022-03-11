import React from "react";
import styles from './style.module.scss';
import Button from "../Button";
import cn from "classnames";

export enum PLAN_BENEFIT {
    TRANSACTIONS = 'Transactions',
    AUTH = 'Auth',
    IDENTITY = 'Identity',
    INVESTMENTS = 'Investments',
    ASSETS = 'Assets',
    LIABILITIES = 'Liabilities',
    INCOME = 'Income',
};

type IProps = {
    name: string,
    description: string,
    price: number,
    benefits: PLAN_BENEFIT[],
};

const PlanCard: React.FC<IProps> = ({ name, description, price, benefits }) => {
    return (
        <div className={styles.planCard}>
            <h3 className={styles.title}>
                {name}
            </h3>
            <p className={styles.description}>
                {description}
            </p>
            <div>
                <div className={styles.price}>${price.toFixed(2)}</div>

                <ul className={styles.benefitContainer}>
                    {Object.values(PLAN_BENEFIT).map((value) => (
                        <li className={cn(styles.benefitItem,{
                            [styles.active]: benefits?.includes(value),
                        })}>
                            {value}
                        </li>
                    ))}
                </ul>

                <Button variants={'secondary'}
                        color={'dark'}
                >
                    Request Access
                </Button>
            </div>
        </div>
    );
};

export default PlanCard;
