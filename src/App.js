import React, { useState, useEffect } from "react";

const defaulTasks = [
  { id: 1, task: "Take out the trash" },
  { id: 2, task: "Wash the dishes" },
];

const App = () => {
  const [todos, setTodos] = useState(defaulTasks);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="container">
      <h1>Ok, Alright.</h1>
      <input type="text" />
      <button>Add Todo</button>

      <div className="container">
        <ul>
          {todos.map((todo) => {
            const { id, task } = todo;
            return <li key={id}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
