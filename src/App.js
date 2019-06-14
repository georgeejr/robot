import React, {Component} from 'react';
import Output from './components/Output'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      facing: ["NORTH","EAST","SOUTH","WEST"],
      currentPos: { x: 0, y: 0, f: 'NORTH'},
      isError: false
    }
  }
  componentDidMount() {
    // this._validation(0,4,"SOUTH")
  }
  _handlePlace = (value) => {
    const {currentPos} = this.state
    let newPlace
    let newPosition = {...currentPos}
    if (value.includes('PLACE')) {
        newPlace = value.split(' ').pop()
        newPlace = newPlace.split(',')
        if (newPlace.length === 3) {
            newPosition.x = parseInt(newPlace[0].trim())
            newPosition.y = parseInt(newPlace[1].trim())
            newPosition.f = newPlace[2].trim()
            console.log(newPosition)
            this._validation(newPosition)
        }
    }
  }
  _handleMove = () => {
    const {currentPos} = this.state
    let newPosition = {...currentPos}
    switch (currentPos.f) {
      case 'NORTH':
        newPosition.y = currentPos.y + 1
        break;
      case 'EAST':
        newPosition.x = currentPos.x + 1
        break;
      case 'SOUTH':
        newPosition.y = currentPos.y - 1
        break;
      case 'WEST':
        newPosition.x = currentPos.x - 1
        console.log(newPosition)
        break;
      default:
    }
    this._validation(newPosition)
  }
  _handleLR = (isRight) => {
    const {currentPos} = this.state
    let newFacing
    newFacing = isRight ?
      newFacing = this.state.facing.indexOf(currentPos.f) + 1
      :
      newFacing = this.state.facing.indexOf(currentPos.f) - 1
    if (newFacing > 3) {
      newFacing = 0;
    } else if (newFacing < 0) {
      newFacing = 3
    }
    const newPlace = {
      x: currentPos.x,
      y: currentPos.y,
      f: this.state.facing[newFacing]
    }
    this.setState({ currentPos: newPlace })
    console.log(newFacing)
  }
  _handleREPORT = () => {

  }
  _handleChange = (e) => {
    if(e.keyCode === 13){
      const value = e.target.value.toUpperCase()
      this._handlePlace(value)
      switch (value) {
        case 'REPORT':
          console.log('REPORT')
          this._handleREPORT()
          break;
        case 'MOVE':
          console.log('MOVE')
          this._handleMove()
          break;
        case 'LEFT':
          console.log('LEFT')
          this._handleLR(false)
          break;
        case 'RIGHT':
          console.log('RIGHT')
          this._handleLR(true)
          break;
        default:
      }
    }
  }
  _validation = (position) => {
    const newPosition = position
    console.log(newPosition)
    const checkF = this.state.facing.includes(newPosition.f)
    if (newPosition.y > 4 || newPosition.x > 4 || newPosition.yield < 0 || newPosition.x < 0 || !checkF) {
      this.setState({
        isError: true
      })
    } else {
      this.setState({ currentPos : newPosition})
    }
  }
  render() {
    return (
      <div className="App" style={styles.container}>
        <h3 style={{marginBottom: 10}}>Available commands:</h3>
        <p>PLACE X,Y,F (F = NORTH, SOUTH, EAST or WEST)<br/>MOVE<br/>LEFT<br/>RIGHT<br/>REPORT</p>
        <input type="text" name="" onKeyDown={this._handleChange} style={styles.input} placeholder="PLACE 0,0,NORTH" />
        <Output position={this.state.currentPos} isErr={this.state.isError}/>
        <a style={styles.readme} href="https://github.com/georgeejr/robot" target="_blank">see readme</a>
      </div>
    )
  }
}


const styles = {
  container: {
    maxWidth: 900,
    paddingTop: 40,
    width: '100%',
    position: 'relative'
  },
  input: {
    padding: '3px',
    width: 300,
    height: 32,
    fontSize: 18,
    textTransform: 'uppercase',
    margin: '20px 0 20px 0'
  },
  readme: {
    position: 'absolute',
    right: 0,
    top: 5,
    fontSize: 14
  }
}


export default App;
