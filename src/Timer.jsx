const Timer = (props) => {
    const {
        seconds,
        setSeconds,
        sessionTime,
        setSessionTime,
        breakTime,
        setBreakTime,
        intervalId,
        setIntervalId,
        playing,
        setPlaying
    } = props;

    const formatTime = (seconds) => {
        let mm = Math.floor(seconds / 60);
        let ss = seconds % 60;

        mm < 10 ? mm = `0${mm}` : `${mm}`;
        ss < 10 ? ss = `0${ss}` : `${ss}`;

        return `${mm}:${ss}`;
    }

    const start = () => {
        let countdown = setInterval (() => {
            setSeconds(prev => prev - 1);
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
            start();
        } else {
            stop();
        }
    }

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