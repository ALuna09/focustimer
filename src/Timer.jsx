const Timer = (props) => {
    const {
        seconds,
        setSeconds,
        sessionTime,
        setSessionTime,
        breakTime,
        setBreakTime
    } = props;

    const formatTime = (seconds) => {
        let mm = Math.floor(seconds / 60);
        let ss = seconds % 60;

        mm < 10 ? mm = `0${mm}` : `${mm}`;
        ss < 10 ? ss = `0${ss}` : `${ss}`;

        return `${mm}:${ss}`;
    }

    return (
        <>
            <h1
                id="time-left"
            >{formatTime(seconds)}</h1>
            <button
                id="start_stop"
            >{">"}ll</button>
            <button
                id="reset"
                onClick={() => {
                    setBreakTime(5);
                    setSessionTime(25);
                    setSeconds(25 * 60);
                }}
            >reset</button>
        </>
    )
}

export default Timer;