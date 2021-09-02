import React from "react";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import DoneContainer from "./DoneContainer";
import "../css/styles.css";

// Hard coded array of items
const tasks = [
    { text: "Eat breakfast", done: false },
    { text: "Walk the dog", done: false },
    { text: "Learn about React", done: false },
    { text: "Watch TV", done: false },
    { text: "Read a book", done: true },
    { text: "Practiced JavaScript", done: true },
    { text: "Feed the dog", done: true },
    { text: "Do morning exercises", done: true }
];

// Array of "to do" items
let toDos = tasks.filter(element => element.done === false);
// Array of "done" items
let doneItems = tasks.filter(element => element.done === true);

const App = () => {
    return (
        <div className="app">
            {/* Child Component 1 - Navigation */}
            <Navigation />
            
            {/* Child Component 2 - ToDosContainer */}
            <ToDosContainer items={toDos}/>

            {/* Child Component 3 - DoneContainer */}
            <DoneContainer items={doneItems}/>
        </div>
    );
}

export default App;