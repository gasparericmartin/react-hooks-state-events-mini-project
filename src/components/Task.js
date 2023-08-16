import React from "react";
import { v4 as uuid } from 'uuid'

function Task({task, list, setList, handleDelete, id}) {

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete"
              id={task.text} 
              onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
