import { useState } from "react";

export default function TaskCard({ task, onComplete, onDelete, onEdit }) {
  const isCompleted = task.status === "completed";
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);
  const [draftPriority, setDraftPriority] = useState(task.priority);

  const handleSave = () => {
    if (!draftTitle.trim()) return;
    onEdit(task.id, draftTitle.trim(), draftPriority);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraftTitle(task.title);
    setDraftPriority(task.priority);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex flex-col gap-4 rounded-xl border border-indigo-500/40 bg-slate-800/50 p-5">
        <input
          type="text"
          value={draftTitle}
          onChange={(e) => setDraftTitle(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
        />
        <select
          value={draftPriority}
          onChange={(e) => setDraftPriority(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:border-indigo-500 focus:outline-none"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleCancel}
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400"
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group flex flex-col gap-4 rounded-xl border p-5 transition-all duration-200 sm:flex-row sm:items-center sm:justify-between ${
        isCompleted
          ? "border-slate-800 bg-slate-950/50"
          : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
      }`}
    >
      <div className="min-w-0">
        <h3
          className={`font-semibold ${
            isCompleted ? "text-slate-500 line-through" : "text-slate-100"
          }`}
        >
          {task.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-slate-700 px-2.5 py-1 text-slate-300">
            {task.priority}
          </span>

          <span
            className={`rounded-full px-2.5 py-1 ${
              isCompleted
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-amber-500/10 text-amber-400"
            }`}
          >
            {isCompleted ? "Completed" : "In progress"}
          </span>
        </div>
      </div>

      <div>
        <button
          onClick={() => setIsEditing(true)}
          className="rounded-lg px-4 py-2 text-sm font-medium transition-colors text-slate-400 hover:text-slate-200"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg px-4 py-2 text-sm font-medium transition-colors text-red-400 hover:text-red-300"
        >
          Delete
        </button>
        <button
          onClick={() => onComplete(task.id)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            isCompleted
              ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
              : "bg-indigo-500 text-white hover:bg-indigo-400"
          }`}
        >
          {isCompleted ? "Mark Incomplete" : "Complete"}
        </button>
      </div>
    </div>
  );
}
