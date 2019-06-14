# robot

## Valid Commands:
PLACE X,Y,F  
MOVE  
LEFT  
RIGHT  
REPORT  

### PLACE
Place robot at position x,y,f  
where x & y = 0-4 (if PLACE coord is not valid application will ignore or discard command)  
f = **NORTH**, **SOUTH**, **EAST** or **WEST**.

### MOVE
Move the robot one unit forward in the direction it is currently facing.

### LEFT RIGHT
It will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

### REPORT
Output the X,Y and F of the robot. This can be in any form,

##### Any move that would cause the robot to fall must be ignored.

#### Notes:
There is a default place which is 0,0,NORTH  
The REPORT function was binded into on enter event of input box.


## How to Install
Clone the project. In the project directory, you can run:
### `yarn install`
Install all dependencies

### `yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`
Launches the test runner in the interactive watch mode.<br>
