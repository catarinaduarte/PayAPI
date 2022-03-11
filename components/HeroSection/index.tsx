import React from "react";
import styles from './style.module.scss';
import HeroImage from '/public/img/home/desktop/illustration-phone-mockup.svg'
import Link from 'next/link';
import ScheduleDemoFormContainer from "../../containers/ScheduleDemoFormContainer";
import Container from "../Container";

const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <Container className={styles.container}>
                <div className={styles.heroImageWrapper}>
                    <HeroImage className={styles.heroImage}/>
                </div>
                <div className={styles.contents}>
                    <h2 className={styles.title}>
                        Start building with our APIs for absolutely free.
                    </h2>
                    <ScheduleDemoFormContainer className={styles.scheduleDemoContainer}/>
                    <p className={styles.questions}>
                        Have any questions? <Link href={'/contact'} prefetch={false}><a>Contact Us</a></Link>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
