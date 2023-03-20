

interface IOpening {
    id: number,
    name: string,
    pgn: string,
    fen: string,
    url: string,
    orientation: string,
    in_charge: string,
}

interface IPlayer{
    name: string,
    code: string,
    fed: string,
    title: string,
}

export type {
    IOpening,
    IPlayer,
}
