const Break = (props) => {
    const {breakTime, setBreakTime} = props;
    return (
        <>
            <h3 
                id="break-label"
            >Break Length</h3>
            <button
                id="break-increment"
            >up</button>
            <strong
                id="break-length"
            >{breakTime}</strong>
            <button
                id="break-decrement"
            >dn</button>
        </>
    )
}

export default Break;