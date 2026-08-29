import { useState, useEffect } from "react";
import { initialTasks } from "../data/tasks";

export function useTasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
      return savedTasks || initialTasks;
    } catch (e) {
      console.error(e);
      return initialTasks;
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleToggleComplete = (id) => {
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

  const handleEditTask = (id, title, priority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title, priority } : task,
      ),
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  function handleAddTask(title, priority, dueDate) {
    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      status: "in-progress",
      projectId: 1,
      dueDate: dueDate || new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString().split("T")[0],
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  const completedTasksCount = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  const progressPercentage =
    tasks.length === 0
      ? 0
      : Math.round((completedTasksCount / tasks.length) * 100);

  return {
    tasks,
    isModalOpen,
    progressPercentage,
    completedTasksCount,
    handleAddTask,
    handleDelete,
    handleEditTask,
    handleToggleComplete,
    setIsModalOpen,
  };
}
