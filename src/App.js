import './App.css';
import { useState } from 'react';
import ToDoItem from './components/ToDoItem/ToDoItem';
import Form from './components/Form/Form';

function App() {

  const [taskState, setTaskState] = useState([
    {id: 1, task: 'Вигуляти собаку', status: true},
    {id: 2, task: 'Купити продукти', status: true},
    {id: 3, task: 'Купити подарунок', status: true},
    {id: 4, task: 'Вигуляти собаку', status: true},
    {id: 5, task: 'Купити продукти', status: true},
    {id: 6, task: 'Купити подарунок', status: true},
    {id: 7, task: 'Вигуляти собаку', status: true},
    {id: 8, task: 'Купити продукти', status: true},
    {id: 9, task: 'Купити подарунок', status: true},]);
  
  const tasks = taskState;

  const [inputValue, setInputValue] = useState();

  const task = {
    id: Math.floor(Math.random() * 1000000)  ,
    task: inputValue,
    status:true
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTasks = [task,...tasks];
    setTaskState(newTasks)
  };
  
  const handleRemove = id => {
    setTaskState(taskState.filter(item => item.id !== id))
  }
  const handleFilter = (id, status) => {
    console.log(id);
    const activeTasks = taskState.filter(item => item.id !== id);
    const doneTasks = taskState.filter(item => item.id === id);
    const newTasks = [...activeTasks,...doneTasks]
    handleStatus(id, status)
    setTaskState(newTasks)

  }

  const handleStatus = (id, status) => {
    const currentTask = taskState.filter(item => item.id === id)
    currentTask[0].status = !currentTask[0].status;
  }
  
  return (
    <div className="container">
      <h1 style={{textAlign:'center'}}>ToDoList</h1>
      <ul>
      {taskState.map(task =>
        <ToDoItem
          key={task.id}
          id={task.id}
          task={task.task}
          status={task.status}
          remove={id => handleRemove(id)}
          done={(id, status) => handleFilter(id, status)}
        />
      )}
      </ul>

      <Form
          getValue={(value) => setInputValue(value)}
          submit={(e) => handleSubmit(e)}
        />
    </div>
  )
}

export default App;
