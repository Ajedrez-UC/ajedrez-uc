

const SYMBOLS: {[key: string]: string} = {
    "N": "♞",
    "B": "♝",
    "R": "♜",
    "Q": "♛",
    "K": "♚",
    "P": "♟",
}

const changePGNwithSymbols = (pgn: string): string => {
    let newFen: string = pgn;
    for (const char of pgn) {
        if (char in SYMBOLS){
            newFen = newFen.replace(char, SYMBOLS[char]);
        }
    }
    return newFen;
}

const fromPGNtoArray = (pgn: string): {white: string, black: string}[] => {
    const array = pgn.split(" ").filter(
        (str) => !str.includes(".")
    );
    const newArray: {white: string, black: string}[] = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray.push({white: array[i], black: array[i+1] || "" });
        }
    }
    return newArray;
};
  

export {
    changePGNwithSymbols,
    fromPGNtoArray,
}
