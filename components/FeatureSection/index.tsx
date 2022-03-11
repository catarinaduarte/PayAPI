import React from "react";
import styles from './style.module.scss';
import FeatureCard from "../../components/FeatureCard";
import Container from "../Container";
import TitledScheduleDemoForm from "../TitledScheduleDemoForm";

const FeatureSection: React.FC = () => {
    return (
        <section className={styles.largeFeatureSection}>
            <Container className={styles.container}>
                <FeatureCard src={'/img/home/desktop/illustration-easy-to-implement.svg'}
                             title={'Easy to implement'}
                             description={'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'}
                             size={'large'}
                />
                <FeatureCard src={'/img/home/desktop/illustration-simple-ui.svg'}
                             title={'Simple UI & UX'}
                             description={'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.'}
                             size={'large'}
                />

                <div className={styles.featureContainer}>
                    <FeatureCard src={'/img/home/desktop/icon-personal-finances.svg'}
                                 title={'Personal Finances'}
                                 description={'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.'}
                    />
                    <FeatureCard src={'/img/home/desktop/icon-banking-and-coverage.svg'}
                                 title={'Banking & Coverage'}
                                 description={'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.'}
                    />
                    <FeatureCard src={'/img/home/desktop/icon-consumer-payments.svg'}
                                 title={'Consumer Payments'}
                                 description={'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.'}
                    />
                </div>

                <div className={styles.titledScheduleDemoFormContainer}>
                    <TitledScheduleDemoForm/>
                </div>
            </Container>
        </section>
    );
};

export default FeatureSection;
