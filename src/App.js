import './App.css';
import db from "./firebase";
import { useEffect, useState } from 'react';

import firebase from "firebase";
import Todo from './Todo';
import { Button, TextField } from '@material-ui/core';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    // fires when app.js loads
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        todo: doc.data().todo,
        description: doc.data().description,
        timestamp: doc.data().timestamp.toDate(),
      })))
    })
  }
    , [inputText])

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  }

  const addTodo = (event) => {
    // after click this will fire off
    event.preventDefault();

    db.collection("todos").add({
      todo: inputText,
      description: description,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
    })
    setInputText("");
    setDescription("");
  }



  return (
    <div className="App">
      <div className="sidebar">
        <div className="heading">
          <h1>Todo App</h1>
        </div>
        <form className="form">
          <TextField id="standard-basic" label="Write a Todo" value={inputText} onChange={inputTextHandler} />
          <TextField
            label="Description"
            multiline
            rows={5}
            value={description}
            onChange={descriptionHandler}

          />
          <Button disabled={!(inputText && description)} variant="contained" color="primary" type="submit" onClick={addTodo}>
            Submit Todo
          </Button>
        </form>
      </div>


      <div className="list-container">
        <h1 className="heading">Your List</h1>
        <div className="list">
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;

