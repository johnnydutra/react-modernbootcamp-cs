class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const isWinner = s1 === s2 && s2 === s3;

    return (
        <div>
            <div>
                <span>{s1}</span>
                <span>{s2}</span>
                <span>{s3}</span>
            </div>
            <div>
                <p>{isWinner ? "You win!" : "You lose!"}</p>
            </div>
      </div>
    )
  }
}