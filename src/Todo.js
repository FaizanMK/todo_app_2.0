import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import "./Todo.css";

function Todo(props) {
  return (
    <div>
      <List className="text-center">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          {/* //pehla wala todo agha object dy todo and 2nd wala km che mung props ke pass kre */}
          <ListItemText primary={props.text} secondary="" />
        </ListItem>
        {/* <Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}  >Delete me</Button>
        //{" "}
        {/* <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        /> */}
      </List>
    </div>
  );
}

export default Todo;
