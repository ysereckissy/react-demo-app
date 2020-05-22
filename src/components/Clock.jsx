import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const format = elm => (elm > 9 ? elm : "0" + elm);

const Clock = () => {
    const date = new Date();
    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [seconds, setSeconds] = useState(date.getSeconds());
    const [ampm, setAmpm] = useState(hours < 12 ? "am" : "pm");

    useEffect(() => {
        setTimeout(() => {
            const date = new Date();
            setHours(date.getHours());
            setMinutes(date.getMinutes());
            setSeconds(date.getSeconds());
            setAmpm(hours < 12 ? "am" : "pm");
        }, 1000);
    })
    return (
        <div>
            <h1>React Timer</h1>
            <StyledClock>
                {format(hours)}:{format(minutes)}:{format(seconds)} {ampm}
            </StyledClock>
        </div>
    );
};

const StyledClock = styled.h2`
    font-family: Helvetica Arial sans-serif;
    font-weight: bold;
    font-size: 8rem;
    color: #600000;
`
export default Clock;
