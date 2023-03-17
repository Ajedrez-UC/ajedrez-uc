import { useState } from "react";
import openings_json from "../data/openings.json";
import { Opening } from "../utils/interfaces";

function Openings() {
  const [openings, setOpenings] = useState<Opening[]>(openings_json);

  return (
    <div>
      <h1>Openings</h1>
      <ul>
        {openings.map((opening) => (
          <li key={opening.id}>{opening.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Openings;