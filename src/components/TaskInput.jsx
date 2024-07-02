import React, { useState } from "react";


const TaskInput = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div style={{marginTop: 40}}>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a new task"
      />
      <button type="button" class="btn btn-primary" style={{marginLeft:10}} onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
