import { useState } from "react";

export default function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("high");

  return (
    <form action="#">
      <div>
        <label htmlFor="task-title">Task Title</label>
        <input
          type="text"
          id="task-title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
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
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}
