import React, {Component} from 'react'


const Output = (props) => {
  console.log(props)
  let {x,y,f} = props.position
    return (
      <div>
        <h2>Output: </h2>
        { props.isErr ?
        <p>Incorrect Input</p>
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
