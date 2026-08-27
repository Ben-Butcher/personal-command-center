export default function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <h3>{task.title}</h3>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
}
