const Session = (props) => {
    const {sessionTime, setSessionTime} = props;
    return (
        <>
            <h3
                id="session-label"
            >Session Length</h3>
            <button
                id="session-increment"
            >up</button>
            <strong
                id="session-length"
            >{sessionTime}</strong>
            <button
                id="session-decrement"
            >dn</button>
        </>
    )
}

export default Session;