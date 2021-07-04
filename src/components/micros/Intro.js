import React, { memo } from 'react';
import styles from './style.module.css';

const Intro = ({ content }) => (
    <div>
        <h1 className={styles.title}>{content.heading}</h1>
        <p>{content.body}</p>
    </div>
);

export default memo(Intro);
