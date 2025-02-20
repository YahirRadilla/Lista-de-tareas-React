import { useState } from 'react';
import './taskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-list-container">
      <h1>My Task List</h1>

      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          + Add
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <label className="task-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="task-checkbox"
              />
              <span className={task.completed ? 'completed-task' : ''}>
                {task.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;