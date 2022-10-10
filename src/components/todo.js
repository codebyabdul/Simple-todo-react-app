import React, {useState} from 'react';
import './todo.css';

const Todo = (props) => {

    const [todo, setTodo] = useState("");
    
    const handleKeyDown = (event) => {

        if(event.key === "Enter"){

            let new_todo = {
                task:event.target.value,
                is_completed:false
            }
    
            props.onTodoAdd(new_todo);
            setTodo('');

        }
    
    }

    const inputChangeHandler = (event) => {
        setTodo(event.target.value);
    }

  return (
        
    <div className='todo-input-div'>
        <input placeholder='Add New Todo' value={todo} onKeyDown={handleKeyDown} onChange={inputChangeHandler} />
    </div>

  )
}

export default Todo;