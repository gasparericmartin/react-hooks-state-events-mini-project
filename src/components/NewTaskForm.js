import React, {useState} from "react";

function NewTaskForm({
            catList, 
            formInputs, 
            setFormInputs,
            onTaskFormSubmit
          }) 
          {

  function handleDetails(e) {
    setFormInputs({...formInputs, text: e.target.value})
  }

  function handleCat(e) {
    setFormInputs({...formInputs, category: e.target.value})
  }
  
  return (
    <form className="new-task-form" 
          onSubmit={(e) => onTaskFormSubmit(e, formInputs)}
    >
      <label>
        Details
        <input type="text" name="text" onChange={handleDetails} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCat}>
          {catList.map(category => {
            if (category !== 'All') {
            return <option key={category}
                            value={category}>{category}
                    </option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
