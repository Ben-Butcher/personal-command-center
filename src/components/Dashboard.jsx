import FocusCard from "./FocusCard";
import { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Finish React Dashboard",
      priority: "High",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Practice React Hooks",
      priority: "Medium",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Work on WeGro",
      priority: "High",
      isCompleted: false,
    },
  ]);

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;
  const handleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

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

        {tasks.map((item) => (
          <FocusCard
            key={item.id}
            title={item.title}
            priority={item.priority}
            isCompleted={item.isCompleted}
            onComplete={() => handleComplete(item.id)}
          />
        ))}
      </main>
    </>
  );
}
