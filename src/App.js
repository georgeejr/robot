import React, {Component} from 'react';
class App extends Component {

  state = {
    f: '',
    x: 0,
    y: 0,

  }
  render() {
    return (
      <div className="App" style={styles.container}>
        <h4>Commands Available:</h4>
        <p>PLACE X,Y,F (F = NORTH, SOUTH, EAST or WEST)<br/>MOVE<br/>LEFT<br/>RIGHT<br/>REPORT</p>
        <input type="text" name="" onClick="" style={styles.input} />
      </div>
    )
  }
}


const styles = {
  container: {
    maxWidth: 900,
    paddingTop: 40,
    width: '100%'
  },
  input: {
    padding: '3px',
    width: 300,
    height: 32,
    fontSize: 18,
    textTransform: 'uppercase'
  }
}


export default App;
