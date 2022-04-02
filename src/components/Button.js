const Button = (props) => {
    const { handleClick} = props;
    return (<div>
        <button onClick={handleClick}>Add message</button>
    </div>)
}
export default Button;