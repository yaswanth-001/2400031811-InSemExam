import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if(task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Arial" }}>
      <h1>My To-Do List</h1>

      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: "10px", width: "250px", borderRadius: "6px", marginRight: "10px" }}
        />
        <button
          onClick={addTask}
          style={{ padding: "10px 15px", borderRadius: "6px", backgroundColor: "#3182ce", color: "white", border: "none" }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, i) => (
          <li key={i} style={{ background: "#edf2f7", margin: "10px auto", width: "300px", padding: "10px", borderRadius: "6px", display: "flex", justifyContent: "space-between" }}>
            {t}
            <button onClick={() => removeTask(i)} style={{ background: "#e53e3e", color: "white", border: "none", borderRadius: "4px", padding: "2px 8px" }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
