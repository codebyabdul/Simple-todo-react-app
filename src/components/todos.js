import React from 'react';
import './todos.css'

function Todos(props) {

  const deleteTodo = (todo) => {
    props.deleteTodo(todo);
  }
    
  return (
    <div className='todo-list-div'>

        <ul>
            {props.todoList.map((element,index) => <li key={index} onClick={() => props.deleteTodo(index)}>{element.task}</li>)}
        </ul>
        
    </div>
  )
}

export default Todos;