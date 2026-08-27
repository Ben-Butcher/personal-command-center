import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onComplete, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="py-12 text-center text-sm text-slate-500">
        No tasks found for today.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
