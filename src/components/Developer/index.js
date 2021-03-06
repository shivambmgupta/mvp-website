import React, { memo } from 'react';
import { Developer } from '../../constants/constants';
import styles from './style.module.css';
import Links from '../../assets/links/links';

const AboutDeveloper = () => (
    <div align="center" className={styles.container}>
        <div>
            <h2 className={styles.title}>{Developer.DEVELOPER}</h2>
            <p>{Developer.ABOUT}</p>
            <div>
                <h4 className={styles.customLink}>
                    <a className={styles.customLink} href={Links.Developer.mailTo} target="_blank" rel="noopener noreferrer">{Developer.USERNAME}</a> | <a className={styles.customLink} href={Links.Developer.resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </h4>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <div className={styles.navigations}>
                {
                    Links.Developer.social_medias.map((social_media) => (
                        <a className={styles.stdMargin} key={social_media.url} href={social_media.url} target="_blank" rel="noopener noreferrer">
                            <img alt={social_media.description} style={{ color: 'white' }} width="22px" src={social_media.icon} />
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
);

export default memo(AboutDeveloper);
