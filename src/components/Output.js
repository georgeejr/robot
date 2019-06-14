import React from 'react'


const Output = (props) => {
  console.log(props)
  let {x,y,f} = props.position
  console.log(props.position)
    return (
      <div>
        <h2>Output: </h2>
        { props.isErr ?
        <p>Invalid format of command or Out of range!</p>
        :
        <p>
          <strong>{x}</strong>,
          <strong>{y}</strong>,
          <strong>{f}</strong>
        </p>
      }
      </div>
    )
}




export default Output
