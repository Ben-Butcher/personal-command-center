export default function TaskCard({ task, onComplete }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onComplete(task.id)}>
        {task.status === "completed"
          ? "Mark as Incomplete"
          : "Mark as Completed"}
      </button>
    </div>
  );
}
