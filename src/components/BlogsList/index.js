import React, { memo } from 'react';
import { BlogConstants, Blogs } from '../../constants/constants';
import Blog from '../Blog';

const BlogList = () => (
    <div>
        <h1>{BlogConstants.header}</h1>
        {
            Blogs.map((blog) => <Blog key={blog.key} blog={blog} />)
        }
    </div>
);

export default memo(BlogList);
