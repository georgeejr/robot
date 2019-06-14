import React from 'react'


const Output = (props) => {
  let {x,y,f} = props.position
  return (
    <div>
      <h3 style={styles.centered}>Output: </h3>
      { props.isErr ?
      <div style={styles.centered}>
        <p>Invalid format of command or Out of range!</p>
        <button style={styles.reset} onClick={props.onReset.bind(this)}>Reset</button>
      </div>
      :
      <p style={styles.output}>
        <strong>{x}</strong>,
        <strong>{y}</strong>,
        <strong>{f}</strong>
      </p>
    }
  </div>
  )
}

const styles = {
  output: {
    fontSize: 34,
  },
  centered: {
    textAlign: 'center'
  },
  reset: {
    padding: '6px 15px',
    fontSize: 16,
    marginTop: 10,
    border: 0,
    height: 40,
    minWidth: 100,
    color: '#fff',
    backgroundColor: '#2196f3',
    cursor: 'pointer'
  }
}



export default Output
