import {React, useState, useEffect} from 'react';

export default function Timer(props) {
    const [time, setTime] = useState({minutes: props.minutes});

    useEffect(() => {
        const timerId = setInterval(() => {
            tick()
        }, 60000);

        return function cleanup() {
            clearInterval(timerId);
        }
    })

    function tick() {
        setTime((prev) => {
            if (prev.minutes > 0) {
                return {minutes: prev.minutes - 1};
            } else {
                return {minutes: 0};
            }
        });
    }
    return (
        <div>
            <h3>{time.minutes} minutes remaining</h3>
        </div>
    )
}