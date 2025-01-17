import React, { memo, useState, useEffect } from 'react';
import { Timeline } from 'antd';
import { CheckCircleTwoTone, ClockCircleTwoTone } from '@ant-design/icons';
import { getTimeDifference } from '../../utils/common';
import { useWindowSize } from 'react-use';
import styles from './style.module.css';

const getLable = (content, job) => `${getTimeDifference(job.fromDate, job.current ? new Date() : job.endDate, 2, false)} | ${job.fromDate.toLocaleDateString(content.dateFormat, content.dateOptions)} - ${job.current ? 'Present' : job.endDate.toLocaleDateString(content.dateFormat, content.dateOptions)}`;

const Experience = ({ content }) => {
    const [mode, setMode] = useState("alternate");
    const windowSize = useWindowSize();
    useEffect(() => {
        setMode(windowSize.width < 800 ? "left" : "alternate");
    }, [windowSize.width]);
    return (
        <div>
            <h1 className={styles.title}>{content.heading}</h1>
            <Timeline mode={mode}>
                {
                    content.body.map((job, index) => (
                        <Timeline.Item
                            key={index}
                            label={mode === 'left' ? null : getLable(content, job)}
                            dot={job.current ? <ClockCircleTwoTone /> : <CheckCircleTwoTone />}
                        >
                            <div>
                                <h3>
                                    {job.profile} @{job.companyName}
                                </h3>
                                {mode === 'left' && <p>{getLable(content, job)}</p>}
                                <p>{job.about}</p>
                            </div>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </div>
    )
};

export default memo(Experience);
