import React, { memo } from 'react';
import { StarTwoTone } from '@ant-design/icons';
import styles from './style.module.css';

const Achievements = ({ content }) => (
    <div style={{ paddingTop: '34px'}}>
        <p className={styles.para} style={{ fontWeight: 'bold' }}>{content.about}</p>
        <br />
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
