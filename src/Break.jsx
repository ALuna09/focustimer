const Break = (props) => {
    const {breakTime, setBreakTime} = props;

    const increment = (time) => {
        if (time === 60) return;

        setBreakTime(time + 1);
    }

    const decrement = (time) => {
        if (time === 1) return;

        setBreakTime(time - 1);
    }

    return (
        <>
            <h3 
                id="break-label"
            >Break Length</h3>
            <button
                id="break-decrement"
                onClick={() => decrement(breakTime)}
            >dn</button>
            <strong
                id="break-length"
            >{breakTime}</strong>
            <button
                id="break-increment"
                onClick={() => increment(breakTime)}
            >up</button>
        </>
    )
}

export default Break;