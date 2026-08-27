import { useState } from "react";

export default function TaskForm({ onAddTask, onClose }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle.trim()) return;

    onAddTask(taskTitle.trim(), taskPriority);
    setTaskTitle("");
    setTaskPriority("Medium");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="task-title"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400"
        >
          Task Title
        </label>
        <input
          type="text"
          id="task-title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title..."
          autoFocus
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="task-priority"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400"
        >
          Task Priority
        </label>
        <select
          name="priority"
          id="task-priority"
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
