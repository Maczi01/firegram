import React from "react";
import styles from './Header.module.scss';
import logoImage from '../../assets/img/logo.png';

const Header = () => (
    <div className={styles.header}>
        <div className={styles.logoContainer}>
            <img src={logoImage} className={styles.logo} alt="logo"/>
            <span>CadGram</span>
        </div>
        <ul className={styles.list}>
            <li className={styles.item}>My projects</li>
            <li className={styles.item}>My cad models</li>
            <li className={styles.item}>About me...</li>
            <li className={styles.item}>My CV</li>
        </ul>
    </div>
)

export default Header