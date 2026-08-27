# Personal Command Center

A personal productivity application built with React to help manage daily tasks, projects, goals, focus sessions, priorities, deadlines, and personal progress.

The project has two purposes:

1. **Build something genuinely useful** for everyday personal productivity.
2. **Develop practical React and full-stack development skills** by building a real application from the ground up.

The goal is not to create another basic todo application. The long-term vision is to create a personal **command center** — a single place where a user can understand what needs to be done, what is important, what they are working toward, and how they are progressing.

---

## 🎯 Project Vision

The Personal Command Center should eventually provide a clear overview of a user's personal productivity.

The application is intended to help manage:

- Daily tasks
- Priorities
- Deadlines
- Projects
- Goals
- Focus/work sessions
- Progress
- Productivity statistics
- Personal productivity insights

The guiding principle is:

> **The Command Center should answer: "What do I need to know and do right now?"**

Rather than overwhelming the user with information, the application should prioritize the most relevant actions and information.

---

## 🛠️ Technology

### Current

- React
- JavaScript
- Vite
- Tailwind CSS
- React Hooks
- Component-based architecture

### Planned

The technology stack may evolve as the application becomes more advanced.

Potential future technologies include:

- Backend API
- Database
- Authentication
- Persistent task/project data
- Productivity analytics
- Additional services and integrations

These will only be introduced when they solve an actual problem within the application.

---

# 🏗️ Current Architecture

The application is being developed using a component-based React architecture.

The current task flow is:

```text
TaskForm
    ↓
Dashboard State
    ↓
TaskList
    ↓
TaskCard
    ↓
User Action
    ↓
Dashboard State Update
```

The `Dashboard` currently acts as the main owner of task state.

Individual components receive the data and functions they need through props rather than directly managing the application's task data.

This is intentional and helps maintain a clear **unidirectional data flow**.

---

# 📁 Current Structure

The project is being organized roughly around the following structure:

```text
src/
│
├── components/
│   ├── FocusCard.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectList.jsx
│   ├── TaskCard.jsx
│   ├── TaskForm.jsx
│   └── TaskList.jsx
│
├── data/
│   └── tasks.js
│
├── pages/
│   └── Dashboard.jsx
│
└── ...
```

The structure will evolve as additional features are introduced.

---

# ✅ Phase One — Task Management Foundation

Phase One focuses primarily on building a solid task-management foundation before expanding the application into projects, goals, focus sessions, and analytics.

## Completed

### Initial Project Structure

The initial React project structure was established to separate components, pages, and data.

### Basic Task Data Model

Tasks were given a consistent data structure containing information such as:

```javascript
{
  id,
  title,
  priority,
  status,
  projectId,
  dueDate,
  createdAt
}
```

The task model was later refactored to use a dedicated `status` property.

Example statuses currently include:

```text
in-progress
completed
```

---

### Controlled Inputs

`TaskForm` uses React controlled inputs to manage form values.

The form currently handles:

- Task title
- Task priority

---

### Task Creation

Tasks can be created through `TaskForm`.

The form communicates with the Dashboard through a callback:

```text
TaskForm
    ↓
onAddTask()
    ↓
Dashboard
    ↓
tasks state
```

New tasks are added to the existing task collection without mutating the original state.

---

### Task State

The Dashboard currently owns the task state using React's `useState`.

Initial task data is loaded from the `data/` directory.

```javascript
const [tasks, setTasks] = useState(initialTasks);
```

---

### Complete / Incomplete Tasks

Users can change a task's status between:

```text
in-progress
completed
```

The state update is handled by the Dashboard and passed down through the component hierarchy.

```text
Dashboard
    ↓
TaskList
    ↓
TaskCard
```

---

### TaskList

`TaskList` is responsible for rendering the collection of tasks.

It does not own the task state.

Instead, it receives tasks through props:

```jsx
<TaskList
  tasks={tasks}
  onComplete={handleTask}
/>
```

---

### TaskCard

`TaskCard` represents an individual task.

It currently displays:

- Task title
- Priority
- Status
- Completion action
- Delete action

The component communicates user actions back to the parent through callback props.

---

### Task Deletion

Users can delete tasks.

The deletion logic remains in the Dashboard while the action is triggered from the `TaskCard`.

This maintains the application's unidirectional data flow.

---

### Dashboard

The Dashboard currently provides:

- Application title
- Personalized greeting
- Current date
- Today's progress
- Task creation
- Task list
- Task completion
- Task deletion

---

### Progress Tracking

The Dashboard calculates how many tasks have been completed.

Example:

```text
3 of 7 tasks completed
43% complete
```

The percentage is calculated from the current task state and updates automatically when task status changes.

The calculation also safely handles the situation where there are no tasks.

---

### Tailwind CSS

Tailwind CSS has been introduced for application styling.

The Dashboard and task components are being styled using Tailwind utility classes rather than relying on large standalone CSS files.

The current visual direction is:

- Clean
- Modern
- Dark interface
- Clear information hierarchy
- Responsive
- Productivity-focused

---

# 🟡 Currently In Progress

## Task Editing

The next task-management feature is editing an existing task.

Users should eventually be able to edit:

- Task title
- Task priority

The following properties should not be edited directly through the task card:

- `id`
- `status`
- `projectId`
- `createdAt`

The intended workflow is:

```text
TaskCard
    ↓
Edit
    ↓
Edit Mode
    ↓
Change Task
    ↓
Save
    ↓
Dashboard State
    ↓
Updated TaskCard
```

Once editing is complete, the task system will support the core operations:

```text
Create
Read
Update
Delete
```

---

# 🖥️ Dashboard Vision

The Dashboard is intended to become the central interface of the application.

The current structure is:

```text
Command Center
│
├── Greeting / Date
│
├── Today's Progress
│
├── Task Creation
│
└── Today's Tasks
    └── TaskList
        └── TaskCard
```

The long-term Dashboard may evolve into:

```text
Command Center
│
├── Overview
│   ├── Greeting
│   ├── Today's Progress
│   └── Important Information
│
├── Today's Tasks
│   └── TaskList
│
├── Focus
│   └── FocusCard
│
├── Projects
│   └── ProjectList
│       └── ProjectCard
│
├── Goals
│
└── Productivity Insights
```

The interface should remain focused on the information that is most useful **right now**.

---

# 🚧 Planned Features

The following features are planned but are **not currently implemented**.

## Task Management

- [x] Create tasks
- [x] Display tasks
- [x] Complete tasks
- [x] Mark completed tasks incomplete
- [x] Delete tasks
- [ ] Edit tasks
- [ ] Task filtering
- [ ] Task sorting
- [ ] Due-date handling
- [ ] Better priority handling
- [ ] Task/project relationships

---

## Projects

A project system will eventually allow multiple tasks to belong to larger objectives.

Planned functionality:

- Create projects
- Display projects
- Assign tasks to projects
- Track project progress
- Set project deadlines
- View project-specific tasks

Components have been created as placeholders:

```text
ProjectList
ProjectCard
```

They will be developed after the task foundation is stable.

---

## Focus Sessions

A focus system is planned to help users dedicate time to specific tasks or projects.

Potential functionality includes:

- Focus timer
- Start/pause/stop sessions
- Associate sessions with tasks
- Record completed sessions
- Track total focus time

`FocusCard` currently exists as a placeholder for this functionality.

---

## Goals

The Command Center should eventually support longer-term goals.

Potential functionality:

- Create goals
- Set target dates
- Break goals into milestones
- Connect goals to projects
- Track progress

---

## Productivity Insights

Once enough data exists, the application could provide useful productivity information such as:

- Tasks completed per day
- Tasks completed per week
- Focus time
- Project progress
- Completion rate
- Priority distribution
- Productivity trends

The goal is not to create statistics for the sake of statistics.

The data should help answer questions such as:

> "Am I actually making progress?"

and

> "Where am I spending my time?"

---

# 🧠 Development Philosophy

This project is intentionally being built incrementally.

Instead of implementing every planned feature immediately, development follows a feature-first approach:

```text
Build
 ↓
Test
 ↓
Understand
 ↓
Refactor
 ↓
Expand
```

Each feature should work properly before another layer of complexity is introduced.

For example:

```text
Task Creation
     ↓
Task Management
     ↓
Task Editing
     ↓
Task Organization
     ↓
Projects
     ↓
Goals
     ↓
Focus
     ↓
Insights
```

This approach is intended to improve both the application and the developer's understanding of React architecture.

---

# 📚 Learning Objectives

This project is also a practical React learning environment.

Through development, the following concepts are being practiced:

- React components
- JSX
- Props
- State
- `useState`
- Controlled inputs
- Event handling
- Conditional rendering
- Array methods
- State immutability
- Parent-child communication
- Callback functions
- Component composition
- Data flow
- Separation of concerns
- Reusable components
- Responsive UI
- Tailwind CSS
- Application architecture

As the project grows, additional concepts will be introduced naturally rather than artificially.

---

# 🚀 Long-Term Goal

The ultimate goal is to turn the Personal Command Center into a genuinely useful personal productivity system.

It should eventually feel less like:

> "A React project I built."

and more like:

> **"The application I actually use to run my day."**

At the same time, the project should demonstrate the ability to design, build, structure, debug, and evolve a real software application.

The project is therefore both:

**A personal productivity tool**  
and  
**a long-term full-stack development project.**

---

# 📍 Current Development Status

**Phase:** Phase One — Task Management Foundation

**Current focus:** Finalizing the Dashboard and completing task management.

### Current workflow

```text
Add Task
   ↓
Task State
   ↓
TaskList
   ↓
TaskCard
   ↓
Complete / Incomplete
   ↓
Delete
   ↓
Edit ← CURRENT NEXT FEATURE
```

After task management is stable, development will move toward the next major feature set rather than immediately adding unnecessary complexity.

---

## ⭐ Project Principle

> **Build something useful. Learn by building it. Improve it as your understanding grows.**