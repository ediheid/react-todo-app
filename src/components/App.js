import React, { useState } from "react";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import DoneContainer from "./DoneContainer";
// import InputField from "./InputField";
// import Button from "./Button";
import InputContainer from "./InputContainer";
import "../css/styles.css";

// Hard coded array of items
// const tasks = [
//   { text: "Eat breakfast", done: false },
//   { text: "Walk the dog", done: false },
//   { text: "Learn about React", done: false },
//   { text: "Watch TV", done: false },
//   { text: "Read a book", done: true },
//   { text: "Practiced JavaScript", done: true },
//   { text: "Feed the dog", done: true },
//   { text: "Do morning exercises", done: true },
// ];

// // Array of "to do" items
// let toDos = tasks.filter((element) => element.done === false);
// // Array of "done" items
// let doneItems = tasks.filter((element) => element.done === true);

const App = () => {
  // New tasks with hooks..

  const [currentId, setCurrentId] = useState(0);

  const [toDos, setTodos] = useState([]);

  const [currentInput, setCurrentInput] = useState({
    id: setCurrentId,
    text: "",
  });

  const updateCurrentInput = (event) => {
    setCurrentInput({ id: currentId, text: event.target.value });
  };

  const addNewInput = () => {
    if (currentInput.text.length > 0) {
      setTodos(toDos.concat(currentInput));

      setCurrentId(currentId + 1);

      setCurrentInput({ id: currentId, text: "" });
    }

    // else {
    //   alert(`Please type something before trying to create a new ToDo item!`);
    // }
  };

  // Delete ToDo item with specific ID
  const deleteItem = (deletedId) => {
    setTodos(toDos.filter((toDos) => toDos.id !== deletedId));
  };

  return (
    <div className="app">
      {/* Child Component 1 - Navigation */}
      <Navigation />

      {/* Child Component 2 - Input container */}
      <InputContainer
        onChangeProp={updateCurrentInput}
        valueProp={currentInput.text}
        updateToDosProp={addNewInput}
      />

      {/* Child Component 3 - ToDosContainer */}
      <ToDosContainer items={toDos} deleteItemProp={deleteItem} />

      {/* Child Component 4 - DoneContainer */}
      {/* <DoneContainer items={doneItems} /> */}
    </div>
  );
};

export default App;
