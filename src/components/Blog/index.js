import React, { memo } from 'react';
import styles from './style.module.css';

const Blog = ({ blog }) => (
    <div className={styles.wrapper}>
        <a href={blog.url} target="_blank" rel="noreferrer noopener"><h2 className={styles.title}>{blog.heading}</h2></a>
        <p>{blog.content}...<b><a className={styles.customLink} href={blog.url} target="_blank" rel="noreferrer noopener">Read more</a></b>.</p>
    </div>
);

export default memo(Blog);
