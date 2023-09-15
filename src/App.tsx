import { useState } from 'react';
import './App.css';
import Task from './components/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value.trim());
  }

  const handleAddTask = () => {
    if(newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }
  const handleDeleteTask = (index: number) => {
   const copyTask = [...tasks];
   copyTask.splice(index, 1);
   setTasks(copyTask);
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        {
          tasks.map((task, index) => <Task key={index} onDelete={() => handleDeleteTask(index)} task={task} />)
        }
      </div>
    </div>
  );
}

export default App;
