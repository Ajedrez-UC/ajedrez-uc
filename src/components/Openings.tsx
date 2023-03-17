import { useState } from "react";
import openings_json from "../data/openings.json";
import { IOpening } from "../utils/interfaces";
import Opening from "./Opening";

function Openings() {
  const [openings, setOpenings] = useState<IOpening[]>(openings_json);

  return (
    <div>
      <h3>Echa un vistazo a nuestras Aperturas</h3>
      <div>
        {openings.map((opening) => (
          <Opening key={opening.id} opening={opening} />
        ))}
      </div>
    </div>
  );
}

export default Openings;