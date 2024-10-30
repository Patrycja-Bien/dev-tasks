import './TaskList.scss';

import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const toggleCompletion = (taskId) => {
    setTaskList(
      taskList.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (e) => {
    const taskId = parseInt(e.target.getAttribute('data-id'));
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="task-list">
        {taskList.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : 'pending'}`}
          >
            <span onClick={() => toggleCompletion(task.id)}>
              {task.completed ? '✓' : '✘'} {task.text}
            </span>
            <button data-id={task.id} onClick={removeTask}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
