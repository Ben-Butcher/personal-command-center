export default function FocusCard({ title, priority, isCompleted }) {
  return (
    <div className="focus">
      <p>{title}</p>
      <p>{priority}</p>
      <button
        onClick={() => {
          isCompleted = !isCompleted;
        }}
      >
        {isCompleted ? "Completed" : "Mark As Completed"}
      </button>
    </div>
  );
}
