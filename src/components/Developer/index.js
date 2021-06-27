import React, { memo } from 'react';
import { Developer } from '../../constants/constants';
import styles from './style.module.css';
import Links from '../../assets/links/links';

const AboutDeveloper = () => {
    return (
        <div align="center" className={styles.container} >
            <div>
                <h2>{Developer.DEVELOPER}</h2>
                <p>{Developer.ABOUT}</p>
                <div>
                    <h4>
                        <a className={styles.customLink} href={Links.Developer.mailTo}>{Developer.USERNAME}</a> | <a className={styles.customLink} href={Links.Developer.resume}>Resume</a>
                    </h4>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.navigations}>
                    {
                        Links.Developer.social_medias.map(social_media => {
                            return (
                                <a className={styles.stdMargin} key={social_media.url} href={social_media.url}>
                                    <img alt={social_media.description} style={{ color: 'white' }} width="22px" src={social_media.icon} />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default memo(AboutDeveloper);