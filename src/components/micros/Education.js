import React, { memo, useEffect, useState } from 'react';
import { Timeline } from 'antd';
import { CheckCircleTwoTone, ClockCircleTwoTone } from '@ant-design/icons';
import { getTimeDifference } from '../../utils/common';
import { useWindowSize } from 'react-use';
import styles from './style.module.css';

const getLable = (content, edu) => `${edu.yearOnly ? edu.year : getTimeDifference(edu.fromDate, edu.current ? new Date() : edu.endDate, 1, false)} ${edu.yearOnly ? '' : `| ${!edu.fromDate ? '' : edu.fromDate.toLocaleDateString(content.dateFormat, content.dateOptions)} - ${edu.current ? 'Current' : edu.endDate?.toLocaleDateString(content.dateFormat, content.dateOptions)}`}`;

const Education = ({ content }) => {
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
                    content.body.map((edu, index) => (
                        <Timeline.Item
                            key={index}
                            label={mode === 'left' ? null : getLable(content, edu)}
                            dot={edu.current ? <ClockCircleTwoTone /> : <CheckCircleTwoTone />}
                        >
                            <div>
                                <h3>{`${edu.discipline}, ${edu.organization}`}</h3>
                                {mode === 'left' && <p>{getLable(content, edu)}</p>}
                                <p>{`Grade: ${edu.grade}`}</p>
                            </div>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </div>
    )
};

export default memo(Education);
