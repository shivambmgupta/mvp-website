import React, { memo } from 'react';

const Intro = ({ content }) => (
    <div style={{ paddingTop: '34px' }}>
        <p>{content.body}</p>
    </div>
);

export default memo(Intro);
