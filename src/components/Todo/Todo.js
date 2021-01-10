import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from "@material-ui/core";
import db from "../../firebase";

const Todo = (props) => {
  return (
    <List className="task-card">
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary={props.todo.todo}
          secondary="Tentative deadline..."
        />
      </ListItem>
      <Button
        onClick={(e) => {
          console.log(props.todo.id);
          return db.collection("todos").doc(props.todo.id).delete();
        }}
      >
        Delete me
      </Button>
    </List>
  );
};

export default Todo;
