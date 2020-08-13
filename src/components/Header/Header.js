import React from "react";
import styles from './Header.module.scss';
import logoImage from '../../assets/img/logo.png';

const Header = () => (
    <div className={styles.header}>
        <img src={logoImage} className={styles.logo} alt="logo"/>
        <ul className={styles.list}>
            <li className={styles.item}>me</li>
            <li>you</li>
        </ul>
    </div>
)

export default Header