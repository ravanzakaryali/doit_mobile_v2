import React, { useState, useEffect } from 'react';

const Countdown = (minutes:number) => {
    const [seconds, setSeconds] = useState(minutes * 60);

    useEffect(() => {
        let timer: any = null;
        if (seconds > 0) {
            timer = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [seconds]);

    const formatSeconds = () => {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return formatSeconds();
};

export default Countdown;