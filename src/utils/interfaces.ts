

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

interface ITournament{
    name: string,
    date: string,
    url: string,
    result: string,
}

export type {
    IOpening,
    IPlayer,
    ITournament,
}
