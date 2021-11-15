import { EyeOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React, { memo } from 'react';
import styles from './style.module.css';

const Blog = ({ blog }) => (
    <div className={styles.wrapper}>
        <a href={blog.url} target="_blank" rel="noreferrer noopener"><h2 className={styles.title}>{blog.heading}</h2></a>
        <p>{blog.content}...<b><a className={styles.customLink} href={blog.url} target="_blank" rel="noreferrer noopener">Read more</a></b>.</p>
        <div>
            <Tooltip title={`Total views: ${blog.views}`}>
                <EyeOutlined />
                <label>{`  ${blog.views} views`}</label>
            </Tooltip>   
        </div>
    </div>
);

export default memo(Blog);
