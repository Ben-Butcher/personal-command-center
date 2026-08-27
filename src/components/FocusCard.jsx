export default function FocusCard({
  id,
  title,
  priority,
  isCompleted,
  onComplete,
}) {
  return (
    <div className="focus">
      <p>{title}</p>
      <p>{priority}</p>

      <button onClick={() => onComplete(id)}>
        {isCompleted ? "Completed" : "Mark As Completed"}
      </button>
    </div>
  );
}
