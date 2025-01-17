import React, { memo } from 'react';
import { BlogConstants, Blogs } from '../../constants/constants';
import Blog from '../Blog';
import styles from './style.module.css';

const BlogList = () => (
    <div>
        <h1 className={styles.title}>{BlogConstants.header}</h1>
        {
            Blogs.map((blog) => <Blog key={blog.key} blog={blog} />)
        }
    </div>
);

export default memo(BlogList);
