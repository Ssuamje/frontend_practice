import { useState, useEffect, FC } from 'react';

const Timer: FC = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const padTime = (time: number): string => {
        return time.toString().padStart(2, '0');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ fontSize: '5rem', color: '#D47C17', position: 'absolute', top: '80%', left: '20%' }}>{padTime(time.getHours())}:</div>
            <div style={{ fontSize: '5rem', color: '#D47C17', position: 'absolute', top: '80%', left: '45%' }}>{padTime(time.getMinutes())}:</div>
            <div style={{ fontSize: '5rem', color: '#D47C17', position: 'absolute', top: '80%', left: '70%' }}>{padTime(time.getSeconds())}</div>
        </div>
    );
};

export default Timer;