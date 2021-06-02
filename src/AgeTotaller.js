import React, { useState } from "react";
import AgeCounter from "./AgeCounter";

const AgeTotaller = () => {
  const [cats, setCats] = useState(["Ming", "Fluffy", "Garfield", "Grumpy"]);
  const [newCat, setNewCat] = useState("");

  const [total, setTotal] = useState( 0 );
  
  function ageTotalHandler(change)
  {
    setTotal( total + change );
  }

  function addNewCat() {
    if (newCat.length > 3) {
      const newCats = [...cats, newCat];
      setCats(newCats);
      setNewCat("");
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setNewCat(event.target.value)}
        value={newCat}
      />
      <button type="submit" onClick={addNewCat}>
        add cat
      </button>

      <div className="AgeTotaller">
        <div className="cats">
          {cats.map((cat) => (
            <AgeCounter cat={cat} ageTotalHandler={ageTotalHandler} />
          ))}
        </div>
        <h1>The total age is:{total}</h1>
      </div>
    </div>
  );
};

export default AgeTotaller;

// 8. Create a function which will update the total age when one of the AgeCounter's current age changes.
// You will need to pass this function down as a prop to AgeCounter and update from there.
// Think carefully here about these functions, e.g.if a cat is 8 and you click on the new life button
// to reset the age to 0, the total age should be decreased by 8.
