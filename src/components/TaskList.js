import React, {useState} from "react";
import { v4 as uuid } from 'uuid'
import Task from './Task'

function TaskList({list, setList, currentCat}) {
  
  
  function handleDelete(e) {
    setList(list.filter(task => task.text !== e.target.id))
  }


  
  return (
    <div className="tasks">
      {list.map(task => {
        if (task.category === currentCat || currentCat === 'All') {
        const newKey = uuid()
        return <Task 
                key={newKey} 
                id={newKey}
                task={task}
                list={list}
                setList={setList}
                handleDelete={handleDelete} 
              />
        }
      })}
    </div>
  );
}

export default TaskList;
