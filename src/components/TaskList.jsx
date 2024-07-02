import React from "react";

const TaskList = ({
  tasks,
  onDeleteTask,
  onEditTask,
  onUpdateTask,
  onToggleCompleted,
  editingTask,
}) => {
  return (
    <div className="table" style={{marginTop:20}}>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>
              {task.id === editingTask ? (
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => onUpdateTask(task.id, e.target.value)}
                  onBlur={() => onUpdateTask(task.id, task.text)}
                />
              ) : (
                <span
                  style={{
                    textDecoration: task.isCompleted ? "line-through" : "none",
                    opacity: task.isCompleted ? 0.5 : 1,
                  }}
                >
                  {task.text}
                </span>
              )}
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                style={{ marginLeft: 10, marginTop: 5 }}
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-warning"
                style={{ marginLeft: 10, marginTop: 5 }}
                onClick={() => onEditTask(task.id)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-success"
                style={{ marginLeft: 10, marginTop: 5 }}
                onClick={() => onToggleCompleted(task.id)}
              >
                {task.isCompleted ? "Uncomplete" : "Complete"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>    
  );
};

export default TaskList;
