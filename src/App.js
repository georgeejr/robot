import React, {Component} from 'react';
import Output from './components/Output'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      facing: ["NORTH","SOUTH","WEST","EAST"],
      currentPos: { x: 0, y: 0, z: ''},
      isError: false
    }
  }
  componentDidMount() {
    // this._validation(0,4,"SOUTH")
  }
  _handlePlace = () => {

  }
  _handleMove = () => {

  }
  _handleLR = () => {

  }
  _handleREPORT = () => {
    console.log(this.state.isError)
  }
  _handleChange = (e) => {
    if(e.keyCode == 13){
      const value = e.target.value.toUpperCase()
      let newPlace
      if (value.includes('PLACE')) {
          newPlace = value.split(' ').pop()
          newPlace = newPlace.split(',')
          if (newPlace.length === 3) {
              const x = parseInt(newPlace[0].trim())
              const y = parseInt(newPlace[1].trim())
              const f = newPlace[2].trim()
              console.log(x,y,f)
              this._validation(x,y,f)
          }
      }
      switch (value) {
        case 'REPORT':
          console.log('REPORT')
          break;
        case 'MOVE':
          console.log('MOVE')
          break;
        case 'LEFT':
          console.log('LEFT')
          break;
        case 'RIGHT':
          console.log('RIGHT')
          break;
        default:

      }
    }
  }
  _validation =(x,y,f) => {
    const newPlace = {x,y,f}
    console.log(newPlace)
    const checkF = this.state.facing.includes(f)
    if (y > 4 || x > 4 || !checkF) {
      this.setState({
        isError: true
      },this._handleREPORT)
    } else {
      this.setState({ currentPos : newPlace})
    }
  }
  render() {
    return (
      <div className="App" style={styles.container}>
        <h3>Commands Available:</h3>
        <p>PLACE X,Y,F (F = NORTH, SOUTH, EAST or WEST)<br/>MOVE<br/>LEFT<br/>RIGHT<br/>REPORT</p>
        <input type="text" name="" onKeyDown={this._handleChange} style={styles.input} />
        <Output position={this.state.currentPos} isErr={this.state.isError}/>
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
