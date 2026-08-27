import { useState } from "react";
import TaskList from "../components/TaskList";
import { initialTasks } from "../data/tasks";

export default function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);

  const completedTasksCount = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  const progressPercentage =
    tasks.length === 0
      ? 0
      : Math.round((completedTasksCount / tasks.length) * 100);

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
    if (time >= 18) return "Evening";
    if (time >= 12) return "Afternoon";
    return "Morning";
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Personal Productivity
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Command Center
            </h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        {/* Overview */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Greeting Card */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {day}, {dayDate} {month}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Good {greeting}, Ben.
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Here is your focus dashboard for today. Keep momentum going.
            </p>
          </div>

          {/* Progress Card */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Today's Progress
                </p>
                <p className="mt-1 text-3xl font-bold text-white">
                  {progressPercentage}%
                </p>
              </div>
              <div className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
                {completedTasksCount} of {tasks.length} Done
              </div>
            </div>

            {/* Glowing Progress bar */}
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all duration-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </section>

        {/* Tasks Section */}
        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-white">Today's Tasks</h2>
              <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                {tasks.length}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-3 sm:p-4 shadow-xl backdrop-blur-sm">
            <TaskList tasks={tasks} onComplete={handleTask} />
          </div>
        </section>
      </main>
    </div>
  );
}
