import React from "react";
import styles from './Header.module.scss';
import logoImage from '../../assets/img/logo.png';

const Header = () => (
    <div className={styles.header}>
        <div>
            <img src={logoImage} className={styles.logo} alt="logo"/>
        </div>
        <ul className={styles.list}>
            <li className={styles.item}>My projects</li>
            <li className={styles.item}>My cad models</li>
            <li className={styles.item}>About me</li>
            <li className={styles.item}>My CV</li>
        </ul>
    </div>
)

export default Header