import TaskCard from "./TaskCard";
export default function TaskList({ tasks, onComplete }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onComplete={onComplete} />
      ))}
    </div>
  );
}
