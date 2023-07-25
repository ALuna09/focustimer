const Session = (props) => {
    const {sessionTime, setSessionTime} = props;

    const increment = (time) => {
        if (time === 60) return;

        setSessionTime(time + 1);
    }

    const decrement = (time) => {
        if (time === 1) return;

        setSessionTime(time - 1);
    }

    return (
        <>
            <h3
                id="session-label"
            >Session Length</h3>
            <button
                id="session-decrement"
                onClick={() => decrement(sessionTime)}
            >dn</button>
            <strong
                id="session-length"
            >{sessionTime}</strong>
            <button
                id="session-increment"
                onClick={() => increment(sessionTime)}
            >up</button>
        </>
    )
}

export default Session;