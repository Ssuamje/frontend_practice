import { useState, useEffect, FC } from 'react';

interface TimerProps {
    time: Date;
}

const Timer: FC<TimerProps> = ({ time }) => {
    const [currentTime, setCurrentTime] = useState<Date>(time);

    useEffect(() => {
        setCurrentTime(time);
        const timerId = setInterval(() => {
            setCurrentTime((prevTime) => {
                const newTime = new Date(prevTime.getTime() - 1000);
                return newTime;
            });
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [time]);

    const padTime = (time: number): string => {
        return time.toString().padStart(2, '0');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ fontSize: '5rem', color: '#D47C17', position: 'absolute', top: '80%', left: '20%' }}>{padTime(currentTime.getHours())}:</div>
            <div style={{ fontSize: '5rem', color: '#D47C17', position: 'absolute', top: '80%', left: '45%' }}>{padTime(currentTime.getMinutes())}:</div>
            <div style={{ fontSize: '5rem', color: '#D47C17', position: 'absolute', top: '80%', left: '75%' }}>{padTime(currentTime.getSeconds())}</div>
        </div>
    );
};

export default Timer;