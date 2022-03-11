import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import PageListContainer from "../../containers/PageListContainer";
import SocialListContainer from "../../containers/SocialListContainer";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <Logo invert />
                <PageListContainer className={styles.pageListContainer} />
                <SocialListContainer className={styles.socialListContainer} />
            </Container>
        </footer>
    );
};

export default Footer;
