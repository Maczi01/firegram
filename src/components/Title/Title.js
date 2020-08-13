import React from 'react';
import styles from './Title.module.scss';

const Title = () => {
    return (
        <div className={styles.title}>
            <h1>FireGram</h1>
            <h2>Your Pictures</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}

export default Title;