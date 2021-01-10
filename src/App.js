import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import Todo from "./components/Todo/Todo";
import db from "./firebase";

//const defaulTasks = ["Take out the trash", "Wash the dishes"];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // const [loading, setLoading] = useState(false);

  // When app loads, we need to listen to the fetch new todos ass added/removed

  const addTodo = (e) => {
    e.preventDefault();

    if (input !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
    console.log("please add something");
  };

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => {
          return doc.data().todo;
        })
      );
    });
  }, []);

  return (
    <div className="container">
      <h1>Ok, Alright.</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write a todo.</InputLabel>
          <Input
            aria-describedby="Task input"
            type="text"
            placeholder="Add task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Primary
        </Button>
      </form>

      <div className="container">
        <ul>
          {todos.map((todo, index) => {
            return <Todo key={index} text={todo} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
