import React, { memo } from 'react';
import { StarTwoTone } from '@ant-design/icons';
import styles from './style.module.css';

const Achievements = ({ content }) => (
    <div>
        <h1 className={styles.title}>{content.heading}</h1>
        <ul className={styles.bar}>
            {
                content.body.map((achievement, index) => (
                    <li className={styles.element} key={index}>
                        <StarTwoTone />
                        <p className={styles.para}>{achievement}</p>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default memo(Achievements);
