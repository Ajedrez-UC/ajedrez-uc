

const SYMBOLS: {[key: string]: string} = {
    "N": "♞",
    "B": "♝",
    "R": "♜",
    "Q": "♛",
    "K": "♚",
    "P": "♟",
}

const changePNGwithSymbols = (fen: string): string => {
    let newFen: string = fen;
    for (const char of fen) {
        if (char in SYMBOLS){
            newFen = newFen.replace(char, SYMBOLS[char]);
        }
    }
    return newFen;
}

export {
    changePNGwithSymbols,
}
