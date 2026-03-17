function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg = num === 7 ? "Good!" : "Bad!";

        return(
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? "Congrats!" : "Unlucky"}</p>
                {num === 7 && <img src="https://media1.tenor.com/m/3XPXsF304GgAAAAC/crazy.gif" alt="Short-circuit!" />}
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));