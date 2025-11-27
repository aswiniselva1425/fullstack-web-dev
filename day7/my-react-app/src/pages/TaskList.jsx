import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState(["Buy milk", "Walk dog"]);
  // const [tasks, setTasks] = useState([]) to test empty message

  return (
    <>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>You have no tasks</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" />
              {task}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TaskList;
