import React from "react";
import styles from './styles.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import Menu from "../Menu";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.hidden}>
                payapi
            </h1>
            <Container className={styles.container}>
                <Logo />

                <Menu />
            </Container>
        </header>
    );
};

export default Header;
