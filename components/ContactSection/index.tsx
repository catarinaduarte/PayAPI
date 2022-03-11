import React from "react";
import styles from "./style.module.scss";
import Container from "../Container";
import TitledScheduleDemoForm from "../TitledScheduleDemoForm";
import PartnerContainer from "../../containers/PartnerContainer";
import ContactFormContainer from "../../containers/ContactFormContainer";

const ContactSection: React.FC = () => {
    return (
        <section className={styles.contactSection}>
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    Submit a help request and we’ll get in touch shortly.
                </h2>

                <div className={styles.contents}>
                    <div className={styles.contactFormContainer}>
                        <ContactFormContainer/>
                    </div>

                    <div className={styles.partnerWrapper}>
                        <h3 className={styles.title}>
                            Join the thousands of innovators already building with us
                        </h3>
                        <PartnerContainer className={styles.partnerContainer}/>
                    </div>
                </div>

                <TitledScheduleDemoForm/>
            </Container>
        </section>
    );
};

export default ContactSection;
