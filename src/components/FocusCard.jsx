export default function FocusCard({ id, title, priority, status, onComplete }) {
  return (
    <div className="focus">
      <p>{title}</p>
      <p>{priority}</p>

      <button onClick={() => onComplete(id)}>
        {status === "completed" ? "Completed" : "Mark As Completed"}
      </button>
    </div>
  );
}
