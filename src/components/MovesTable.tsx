import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { fromPGNtoArray } from '../utils/functions';


const MovesTable = ({pgn}: {pgn: string}) => {
    const movesTable = fromPGNtoArray(pgn);
    return (
        <Table>
            <tbody>
                {movesTable.map((move, index) => {
                    return (
                        <tr key={index}>
                            <TdNumber>{index + 1}</TdNumber>
                            <TdMove>{move.white}</TdMove>
                            <TdMove>{move.black}</TdMove>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
    )
}

export default MovesTable;

const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    margin: 2%;
    max-width: 100px;
    color: #f1f5f9;
`;

const TdNumber = styled.td`
    background-color: #1e293b;
    padding: 8px 5px;
    min-width: 35px;
    text-align: center;
    border: 1px solid #475569;
`;

const TdMove = styled.td`
    background-color: #334155;
    border: 1px solid #334155;
    margin: 2%;
    padding: 8px 5px;
    padding-left: 10px;
    min-width: 50px;
`;
