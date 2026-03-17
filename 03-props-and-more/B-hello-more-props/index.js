class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo" 
          from="Paul"
          bangs={4}
          img="path/to/image.jpg"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))