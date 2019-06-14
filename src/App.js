import React, {Component} from 'react';
import Output from './components/Output'
import Description from './components/Description'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      facing: ["NORTH","EAST","SOUTH","WEST"],
      currentPos: { x: 0, y: 0, f: 'NORTH'},
      isError: false
    }
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
        break;
      default:
    }
    this._validation(newPosition)
  }
  _handleLR = (isRight) => {
    const {currentPos} = this.state
    let newFacing
    newFacing = isRight ? newFacing = this.state.facing.indexOf(currentPos.f) + 1
      : newFacing = this.state.facing.indexOf(currentPos.f) - 1
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
    this.setState({ currentPos: {...this.state.currentPos} })
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
    const checkF = this.state.facing.includes(newPosition.f)
    if (newPosition.y > 4 || newPosition.x > 4 || newPosition.y < 0 || newPosition.x < 0 || !checkF) {
      this.setState({ isError: true })
    } else {
      this.setState({ currentPos : newPosition})
    }
  }
  _onReset = (e) => {
    console.log(e)
    this.refs.input.value = ''
    const currentPos = { x: 0, y: 0, f: 'NORTH'}
    this.setState({currentPos, isError: false})
    console.log(this.state.currentPos)
  }
  render() {
    return (
      <div className="App" style={styles.container}>
        <div style={styles.wrapper}>
          <input type="text" ref="input" onKeyDown={this._handleChange} style={styles.input} placeholder="PLACE 0,0,NORTH" />
          <Output
            position={this.state.currentPos}
            isErr={this.state.isError}
            onReset={this._onReset}
          />
        </div>
        <Description />
      </div>
    )
  }
}


const styles = {
  container: {
    maxWidth: 900,
    paddingTop: 0,
    width: '100%',
    position: 'relative'
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 60
  },
  input: {
    padding: '3px',
    width: 300,
    height: 40,
    fontSize: 20,
    padding: '0 10px',
    textTransform: 'uppercase',
    margin: '20px 0 20px 0',
    border: '1px solid #9e9e9e',
    color: '#212121'
  }
}


export default App;
