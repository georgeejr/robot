import React from 'react';

const Description = () => {
  return (
    <div style={styles.notes} className="notes">
      <p>The application is a simulation of a robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.</p>
      <h4 style={{marginBottom: 10, marginTop: 30}}>Valid commands:</h4>
      <ul style={styles.list}>
        <li>PLACE X,Y,F (F = NORTH, SOUTH, EAST or WEST)</li>
        <li>MOVE</li>
        <li>LEFT</li>
        <li>RIGHT</li>
        <li>REPORT</li>
      </ul>
      <a style={styles.readme} href="https://github.com/georgeejr/robot" target="_blank">see readme</a>
    </div>
  )

}

const styles = {
  list: {
    fontSize: 14
  },
  readme: {
    position: 'absolute',
    right: 0,
    top: 5,
    fontSize: 14
  },
  notes: {
    marginTop: 70,
    borderTop: '1px solid #eaeaea',
    paddingTop: 10
  }
}
export default Description
