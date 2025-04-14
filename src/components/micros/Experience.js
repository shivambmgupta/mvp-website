import React, { memo, useState, useEffect } from 'react';
import { Timeline } from 'antd';
import { CheckCircleTwoTone, ClockCircleTwoTone } from '@ant-design/icons';
import { getTimeDifference } from '../../utils/common';
import { useWindowSize } from 'react-use';

const getLable = (content, edu) => `${edu.yearOnly ? edu.year : getTimeDifference(edu.fromDate, edu.current ? new Date() : edu.endDate, 1, false)} ${edu.yearOnly ? '' : `| ${!edu.fromDate ? '' : edu.fromDate.toLocaleDateString(content.dateFormat, content.dateOptions)} - ${edu.current ? 'Current' : edu.endDate?.toLocaleDateString(content.dateFormat, content.dateOptions)}`}`;

const Experience = ({ content }) => {
    const [mode, setMode] = useState("alternate");
    const windowSize = useWindowSize();
    useEffect(() => {
        setMode(windowSize.width < 800 ? "left" : "alternate");
    }, [windowSize.width]);
    return (
        <div>
            <br /><br />
            <Timeline mode={mode}>
                {
                    content.body.map((job, index) => (
                        <Timeline.Item
                            key={index}
                            label={mode === 'left' ? null : getLable(content, job)}
                            dot={job.current ? <ClockCircleTwoTone /> : <CheckCircleTwoTone />}
                        >
                            <div>
                                <h3 style={{ fontWeight: 'bold' }}>
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
