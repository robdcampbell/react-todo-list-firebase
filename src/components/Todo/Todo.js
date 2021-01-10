import React from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

const Todo = (props) => {
  return (
    <List className="list-container">
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Tentative deadline..." />
      </ListItem>
    </List>
  );
};

export default Todo;
