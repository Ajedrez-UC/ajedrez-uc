import { IOpening } from "../utils/interfaces";
import { changePNGwithSymbols } from "../utils/functions";

function Opening({opening}: {opening: IOpening}){
    return (
        <div>
            <h4>{opening.name}</h4>
            <p>{changePNGwithSymbols(opening.png)}</p>
            <p>{opening.in_charge}</p>
        </div>
    );
}

export default Opening;