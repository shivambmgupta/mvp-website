import React, { memo } from 'react';
import styles from './style.module.css';

const Blog = ({ blog }) => {
    return (
        <div className={styles.wrapper}>
           <a href={blog.url}><h2>{blog.heading}</h2></a>
           <p>{blog.content} ...<b><a className={styles.customLink} href={blog.url}>Read more</a></b>.</p>
        </div>
    );
}

export default memo(Blog);