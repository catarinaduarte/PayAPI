import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import TitledScheduleDemoForm from "../TitledScheduleDemoForm";
import PlanContainer from "../../containers/PlanContainer";

const PricingSection: React.FC = () => {
    return (
        <section className={styles.pricingSection}>
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    Pricing
                </h2>

                <div className={styles.planContainer}>
                    <PlanContainer/>
                </div>

                <TitledScheduleDemoForm/>
            </Container>
        </section>
    );
};

export default PricingSection;
