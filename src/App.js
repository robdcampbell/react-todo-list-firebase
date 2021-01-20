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
import "./index.css";
import firebase from "firebase";

const App = () => {
  // INITIAL STATES OF TODOS AND INPUT
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [newCollection, setNewCollection] = useState("");

  // ADD TODO TO FIREBASE
  const addTodo = (e) => {
    e.preventDefault();

    db.collection("users").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput("");
  };

  // Add new collection to firebase:

  const addCollection = (e) => {
    e.preventDefault();
    db.collection(newCollection).add({
      todo: "another test",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    console.log(newCollection);
    setNewCollection("");
  };

  // Retreive values from Firebase - TODOS
  /*
  useEffect(() => {
    // wiring up, to retreive data from firebase
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, todo: doc.data().todo };
          })
        );
      });
  }, []);
  */

  // Retreive values from Firesbase - Test Users
  useEffect(() => {
    // wiring up, to retreive data from firebase
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, todo: doc.data().todo };
          })
        );
      });
  }, []);

  return (
    <div className="container">
      <h1>Tasks:</h1>
      <h4>(let's get things done)</h4>
      <form className="form-container">
        <FormControl>
          <InputLabel htmlFor="my-input">Write a todo.</InputLabel>
          <Input
            aria-describedby="Task input"
            type="text"
            placeholder="Add task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
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

      <form className="form-container">
        {/* NEW COLLECTION TEST */}
        <FormControl>
          <InputLabel htmlFor="my-collection">New Collection test</InputLabel>
          <Input
            aria-describedby="collection input"
            type="text"
            placeholder="Add new collection..."
            value={newCollection}
            onChange={(e) => setNewCollection(e.target.value)}
          />
        </FormControl>
        <Button
          disabled={!newCollection}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addCollection}
        >
          Primary
        </Button>
      </form>

      <div className="container">
        <ul>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
