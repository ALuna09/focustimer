const Timer = (props) => {
    const {
        seconds,
        setSeconds,
        sessionTime,
        breakTime
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
        </>
    )
}

export default Timer;