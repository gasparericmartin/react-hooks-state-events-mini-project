import React from "react";

function CategoryFilter({
                          currentCat,
                          setCurrentCat,
                          CATEGORIES 
                        }) 
{
  
  function handleCatClick(e) {
    if (e.target.textContent === 'All') {
    setCurrentCat('All')
    }
    else {
    setCurrentCat(e.target.textContent)
    }
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(category => {
        if (category !== currentCat) {
          return <button key={category}
                      onClick={handleCatClick}
                      >{category}
                      </button>
        }
        else {
          return <button key={category}
          onClick={handleCatClick}
          className='selected'>{category}
          </button>
        }
      })}
    </div>
  );
}

export default CategoryFilter;
