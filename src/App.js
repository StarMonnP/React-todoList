import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {

const [input, setInput] = React.useState();
const [todo, setTodo] = React.useState([]);
const [point, setPoint] = React.useState(0);

/*
*addding a new task to todolist(todo)
*copy the todo list and the push new task into it, set new todo list back to todo
*/
const addNewTask = () => {
  const newTodo = todo.slice();
  newTodo.push(input);
  setTodo(newTodo);
}


/*
*delete a task from the todo list(todo)
*copy the todo list and delete one task from it, set it back to todo using setTodo
*/
const deleteTask = (index) => {
  const newTodo = [...todo];
  newTodo.splice(index, 1);
  setTodo(newTodo);
}

/*
*completet task complete a task from todo(basically delete it) and adds points to reward you
* adding some points to the point value
*/
const completeTask = (index) => {
  const newTodo = [...todo];
  newTodo.splice(index, 1);
  setTodo(newTodo);
  addRandomPoint();
}

/*
* addRandomPoint simple generate a number and add it to the point using setPoint
*/
const addRandomPoint = () =>{
  setPoint(point + Math.floor(Math.random() *10)+1);
}

/*
* resets the points value to 0
*/
const resetPoints = () => {
  setPoint(0);
}

  return (
    <div className="App">
        <div className='div_1'>
        
            <ProgressBar className="bar" variant="success" now={point} />
             <Button className='Btn_pt_rs' variant='success' onClick={() => resetPoints()}>reset Points</Button>
          
          
          <input className='inputField' variant='success' type="text" value={input||""} onChange={(e) => setInput(e.target.value)}></input>
          <Button className='Btn_ts_sbm' variant='success' onClick={() => addNewTask()}>Add Task</Button>
        </div>

        <div className='List'>
            {todo.map( (text, index) => 
            <Card 
                  key={index}
                  bg="success"
                  text='danger'>
              <Card.Body>
                <div className='div_card_body_outer'>
                   <div className='div_card_body_1'>
                    {text}
                </div>

                  <div className='div_card_body_2'>
                      <Button variant="primary" onClick={(index) => completeTask(index)}>G</Button>{" "}
                      <Button variant="danger" onClick={(index) => deleteTask(index)}>X</Button> 
                  </div>
                </div>
               
              </Card.Body>
            </Card>)}
        </div>
    </div>
  );
}

export default App;
