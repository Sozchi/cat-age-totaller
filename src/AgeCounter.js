import React, { useState } from "react";

const AgeCounter = (props) => {
  const [age, setAge] = useState("");
  const [newAge, setNewAge] = useState("");
  
  const addAge = () =>
  {
    const newCatAge = [...cat, newAge];
    setAge( newCatAge );
  }

  const addLife = () => {
    setAge(age - 1);
  };
  return (
    <div className="AgeCounter">
      <h4>{props.cat}</h4>
      <h3>{0}</h3>

      <button onClick={addAge}>Add Year</button>
      <button onClick={addLife}>New Life</button>
    </div>
  );
}
export default AgeCounter;
    
// 4. Pass each name as a prop to the AgeCounter component and render the name above the current 
// age in a h4 tag.

    
    
    
// 1. Create a AgeCounter component which uses useState to store the current age and has two buttons -
// one to add a year( increment state by 1 ) and one to add a new life( set state back to 0 ).
// Create these functions and use the onClick event on the buttons to use them.Display the current
// age within the AgeCounter component in a h3 tag.Use a className of ".AgeCounter" for the component
// ( it should be a div with a h3 tag and two buttons inside, the CSS is already provided in styles.css).