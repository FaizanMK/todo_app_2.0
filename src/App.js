import { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input } from "@mui/material";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

// reference to db
const todosRef = query(collection(db, "todos"), orderBy("timestamp", "desc"));

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = async (event) => {
    event.preventDefault();
    // setTodos([...todos, input]);
    // this will send data to the database
    const docRef = await addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    setInput("");
  };
  // useEffect(() => {
  //   getDocs(todosRef).then((querySnapshot) => {
  //     const data = querySnapshot.docs.map((doc) => doc.data().todo);
  //     // in above line querySnapshot.docs means go and and get all the documents
  //     // doc.data() is an object and in that we have todo data
  //     setTodos(data);
  //     console.log("i am the data", data);
  //   });
  // }, []);
  useEffect(() => {
    const unsubscribe = onSnapshot(todosRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data().todo);
      setTodos(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // normal parenthesis in map's return means that we gonna return some HTML
  return (
    <div className="App">
      <form type="submit" action="">
        <FormControl>
          <InputLabel> Write a Todo</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          onClick={addTodo}
          disabled={!input}
          type="submit"
          variant="contained"
        >
          Add Todo
        </Button>

        {/* <button onClick={addTodo}>Add Todo</button>{" "} */}
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
