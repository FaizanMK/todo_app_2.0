import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import "./Todo.css";
// import { MdDelete } from "react-icons/md";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = async () => {
    // update the todo with the new inpuut text
    setOpen(false);
    await updateDoc(doc(db, "todos", props.todo.id), {
      todo: input,
    });
  };
  const deleteMe = async () => {
    console.log("deleteMe");
    await deleteDoc(doc(db, "todos", props.todo.id));
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // use return in {} map

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              it is working{" "}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <input
              className="border border-black"
              onChange={(event) => setInput(event.target.value)}
              value={input}
              placeholder={props.todo.todo}
              type="text"
            />
            <Button onClick={updateTodo}>Update Todo </Button>
          </Box>{" "}
        </div>
      </Modal>
      <List className="text-center">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          {/* //pehla wala todo agha object dy todo and 2nd wala km che mung props ke pass kre */}
          <ListItemText primary={props.todo.todo} secondary="" />
        </ListItem>
        <div className="flex justify-center items-center">
          <button onClick={handleOpen}>Edit</button>
          <DeleteIcon className="hover:cursor-pointer" onClick={deleteMe} />
        </div>
      </List>
    </>
  );
}

export default Todo;
