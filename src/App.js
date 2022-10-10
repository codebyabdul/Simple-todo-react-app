
import './App.css';
import react, {useState} from 'react';

import Todo from './components/todo';
import Todos from './components/todos';

import Snackbar from '@mui/material/Snackbar';

function App() {

  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const todoAdd = (todo) => {
    setTodos([...todos, todo]);
    setSnackbarMsg('Todo added successfully');
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onDeleteTodo = (todoIndex) => {
    setTodos(todos.filter((item,index) => index !== todoIndex));
    setSnackbarMsg('Todo deleted successfully');
    setOpen(true);
  }

  return (

    <div className='todo-main'>

      <div className="todo-div">
        <h1> 
          Todo App
        </h1>

        <br />

        <Todo onTodoAdd={todoAdd} />
        <Todos todoList={todos} deleteTodo={onDeleteTodo}/>

        <Snackbar
          open={open}
          autoHideDuration={2000}
          message={snackbarMsg}
          onClose={handleClose}
          severity="success"
        />
        {/* <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message={snackbarMsg}
          action={action}
        /> */}
        
      </div>

    </div>

   
  );
}

export default App;
