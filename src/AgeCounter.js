import React, { useState } from "react";

const AgeCounter = (props) => {
  const [age, setAge] = useState(0);
  const isYoungOrOld = age >= 9 ? "old" : "young";

  function ageHandler(change) {
    setAge(age + change);
    props.ageTotalHandler(change);
  }

  return (
    <div className={`AgeCounter ${isYoungOrOld}`}>
      <h4>{props.cat}</h4>
      <h3>{age}</h3>

      <button onClick={() => ageHandler(1)}>Add Year</button>
      <button onClick={() => ageHandler(-age)}>New Life</button>
    </div>
  );
};
export default AgeCounter;
