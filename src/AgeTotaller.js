import React, {useState} from "react";
import AgeCounter from "./AgeCounter";

const AgeTotaller = () =>
{
  const [cats, setCats] = useState(["Ming", "Fluffy", "Garfield"]);
  return (
    <div className="AgeTotaller">
      <ul className="">
        {cats.map((cat, index) => (
          <li>
            <AgeCounter cat={cat}/>
          </li>
        ))}
      </ul>

      <div className="cats"></div>
    </div>
  );
};

export default AgeTotaller;


// 3. Use useState to create an array of four cat names in AgeTotaller.js( call the variable "cats" ).
// Use.map to render an AgeCounter component for each name.