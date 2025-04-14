import React, { memo, Suspense } from 'react';
import { profile } from '../../constants/constants';
import { Divider } from 'antd';

const Intro = React.lazy(() => import('../micros/Intro'));
const Experiences = React.lazy(() => import('../micros/Experience'));
const Achievements = React.lazy(() => import('../micros/Achievements'));

const About = memo(() => (
    <div>
        <Suspense fallback={<div />}>
            <Intro content={profile.about} />
            <Experiences content={profile.experience} />
            <Divider />
            <Achievements content={profile.achievements} />
        </Suspense>
    </div>
));

export default memo(About);
