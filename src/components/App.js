import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [list, setList] = useState([...TASKS])
  const [catList, setCatList] = useState([...CATEGORIES])
  const [formInputs, setFormInputs] = useState({
    text: '',
    category: ''
  })
  const [currentCat, setCurrentCat] = useState('All')


  function onTaskFormSubmit(e, taskObj) {
    e.preventDefault()
    setList([...list, formInputs])
  }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter currentCat={currentCat}
                      setCurrentCat={setCurrentCat}
                      CATEGORIES={CATEGORIES}
      />
      <NewTaskForm catList={catList}
                    formInputs={formInputs}
                    setFormInputs={setFormInputs}
                    onTaskFormSubmit={onTaskFormSubmit} 
      />
      <TaskList list={list} 
                setList={setList} 
                currentCat={currentCat} 
      />
    </div>
  );
}

export default App;
