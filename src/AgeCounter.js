import React, {useState} from "react";

const AgeCounter = () => {
    const [age, setAge] = useState(0);
    return (
        <div className="button">
          <button>add</button>
        </div>
    )
}
export default AgeCounter;
    
    
    
    
    
// 1. Create a AgeCounter component which uses useState to store the current age and has two buttons -
// one to add a year( increment state by 1 ) and one to add a new life( set state back to 0 ).
// Create these functions and use the onClick event on the buttons to use them.Display the current
// age within the AgeCounter component in a h3 tag.Use a className of ".AgeCounter" for the component
// ( it should be a div with a h3 tag and two buttons inside, the CSS is already provided in styles.css).