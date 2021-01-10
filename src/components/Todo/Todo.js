import React, { useState } from "react";
import "./Todo.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Modal,
} from "@material-ui/core";
import db from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Todo = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <button onClick={(e) => setOpen(false)}>Finished Editing</button>
        </div>
      </Modal>
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
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <Button
          onClick={(e) => {
            console.log(props.todo.id);
            return db.collection("todos").doc(props.todo.id).delete();
          }}
        >
          Delete me
        </Button>
      </List>
    </>
  );
};

export default Todo;
