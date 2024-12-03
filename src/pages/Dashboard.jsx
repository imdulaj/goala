import React, { useState } from 'react'
import './Dashboard.css';
import TaskForm from '../components/TaskForm';
import TaskColumn from '../components/TaskColumn';
import todoIcon from '../assets/direct-hit.png';
import doingIcon from '../assets/glowing-star.png';
import doneIcon from '../assets/check-mark-button.png';



function Dashboard() {
  const [tasks, setTasks] = useState([])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index) => index !== taskIndex)
    setTasks(newTasks)

  }
  return (
    <div className='dashboard'>
        <TaskForm setTasks={setTasks} />
      <header className='app_header'></header>
      <main className='app_main'>
        <TaskColumn title="To do" link={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete} />  
        <TaskColumn title="Doing" link={doingIcon} tasks={tasks} status="doing" handleDelete={handleDelete} />
        <TaskColumn title="Done" link={doneIcon  } tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default Dashboard
