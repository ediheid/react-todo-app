import React, { useState } from "react";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import DoneContainer from "./DoneContainer";
import InputField from "./InputField";
import Button from "./Button";
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

  const [toDos, setTodos] = useState([]);

  const [currentInput, setCurrentInput] = useState("");

  const updateCurrentInput = (event) => {
    setCurrentInput(event.target.value);
  };

  const addNewInput = () => {
    if (currentInput.length > 0) {
      setTodos(toDos.concat(currentInput));

      setCurrentInput("");
    }

    // else {
    //   alert(`Please type something before trying to create a new ToDo item!`);
    // }
  };

  return (
    <div className="app">
      {/* Child Component 1 - Navigation */}
      <Navigation />

      {/* Input container */}
      <div className="input-container">
        {/* Input Field */}
        <InputField
          onChangeProp={updateCurrentInput}
          valueProp={currentInput}
        />
        {/* Input submit button */}
        <Button updateToDosProp={addNewInput} />
      </div>
      {/* Child Component 2 - ToDosContainer */}
      <ToDosContainer items={toDos} />
      {/* Child Component 3 - DoneContainer */}
      {/* <DoneContainer items={doneItems} /> */}
    </div>
  );
};

export default App;
