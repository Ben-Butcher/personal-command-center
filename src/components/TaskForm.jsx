import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle.trim()) return;

    onAddTask(taskTitle.trim(), taskPriority);
    setTaskTitle("");
    setTaskPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task-title">Task Title</label>
        <input
          type="text"
          id="task-title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title..."
        />
      </div>
      <div>
        <label htmlFor="task-priority">Task Priority</label>
        <select
          name="priority"
          id="task-priority"
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}
