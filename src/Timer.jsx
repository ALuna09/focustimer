import { useState, useEffect } from "react";

const Timer = (props) => {
    const {
        // seconds,
        // setSeconds,
        sessionTime,
        setSessionTime,
        breakTime,
        setBreakTime,
        intervalId,
        setIntervalId,
        playing,
        setPlaying,
        studyTime,
        setStudyTime
    } = props;

    const [seconds, setSeconds] = useState(5); //TODO Turn back to default state (not 5)

    const formatTime = (seconds) => {
        let mm = Math.floor(seconds / 60);
        let ss = seconds % 60;

        mm < 10 ? mm = `0${mm}` : `${mm}`;
        ss < 10 ? ss = `0${ss}` : `${ss}`;

        return `${mm}:${ss}`;
    }

    const start = (secs) => {
        let tempSeconds = secs;
        let countdown = setInterval (() => {
            tempSeconds--;
            setSeconds(prev => prev - 1);
            
            if(tempSeconds < 1) {
                setStudyTime(!studyTime);
                clearInterval(countdown);
                return studyTime ? setSeconds(breakTime * 60) : setSeconds(sessionTime * 60)
            };
            
        }, 1000);

        setIntervalId(countdown);
    }

    const stop = () => {
        clearInterval(intervalId);
    }

    const playPause = () => {
        setPlaying(prev => !prev);
        let tempPlaying = !playing;
        
        if (tempPlaying && seconds > 0) {
            start(seconds);
        } else {
            stop();
        }
    }

    useEffect(() => {
        console.log("Hi",seconds);
    }, [])

    return (
        <>
            <h1
                id="time-left"
            >{formatTime(seconds)}</h1>
            <button
                id="start_stop"
                onClick={playPause}
            >{">"}ll</button>
            <button
                id="reset"
                onClick={() => {
                    setPlaying(false);
                    setBreakTime(5);
                    setSessionTime(25);
                    setSeconds(25 * 60);
                }}
            >reset</button>
        </>
    )
}

export default Timer;