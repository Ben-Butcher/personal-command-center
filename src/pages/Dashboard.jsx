import FocusCard from "../components/FocusCard";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useState } from "react";
import { initialTasks } from "../data/tasks";

export default function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);

  const completedTasksCount = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  const handleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "in-progress" : "completed",
            }
          : task,
      ),
    );
  };

  function handleAddTask(title, priority) {
    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      status: "in-progress",
      projectId: 1,
      dueDate: "2026-08-28",
      createdAt: "2026-08-27",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  const date = new Date();
  const day = getDay(date.getDay());
  const month = getMonth(date.getMonth());
  const greeting = getGreeting(date.getHours());
  const dayDate = date.getDate();

  function getMonth(mon) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[mon];
  }

  function getDay(dayNum) {
    const weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekDay[dayNum];
  }

  function getGreeting(time) {
    if (time >= 18) {
      return "Evening";
    } else if (time >= 12) {
      return "Afternoon";
    } else {
      return "Morning";
    }
  }

  return (
    <>
      <header>
        <h1>Command Center</h1>
      </header>

      <main>
        <div className="info-center">
          <h3>Good {greeting}, Ben</h3>
          <p>
            {day}, {dayDate} {month}
          </p>
          <p>
            Progress {completedTasksCount} / {tasks.length}
          </p>
        </div>

        <TaskForm onAddTask={handleAddTask} />

        <TaskList tasks={tasks} />
      </main>
    </>
  );
}
