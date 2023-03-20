import legends from '../data/players.json';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';
import { useState } from 'react';
import { IPlayer } from '../utils/interfaces';

function Legends(){


    const players = JSON.parse(JSON.stringify(legends)).map((player: IPlayer) => {
        player.name = player.name
            .split(' ')
            .map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        return player;
    });
    const playersSorted = players.sort((a: IPlayer, b: IPlayer) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    const [active, setActive] = useState<boolean>(false);
    return (
        <Container>
            <Button onClick={() => setActive(!active)}>
                {active ? <span><Icon className="fa fa-chevron-up"></Icon> Ocultar</span> :
                    <span><Icon className="fa fa-chevron-down"></Icon> Ver</span>}
                Jugadores Históricos
            </Button>
            <AnimateHeight 
                duration={ 1500 }
                height={ (active) ? 'auto' : 0 }
            >
                <SubContainer>
                    <h2>Jugadores Históricos</h2>
                    Aquí se encuentran algunos jugadores que han 
                    pertenecido en algún momento en la selección.
                    <Table>
                        <thead>
                            <TrHead>
                                <th>Título</th>
                                <th>Nombre</th>
                                <th>FED</th>
                                <th>FIDE ID</th>
                            </TrHead>
                        </thead>
                        <tbody>
                            {playersSorted.map((player: IPlayer, index: number) => (
                                <Tr key={index}>
                                    <td>{player.title}</td>
                                    <td>{player.name}</td>
                                    <td>{player.fed}</td>
                                    {player.code === '0' ? <td>-</td> :
                                    <Link href={`https://ratings.fide.com/profile/${player.code}`} target="_blank" rel="noreferrer">
                                        <td>{player.code}</td>
                                    </Link>
                                    }
                                </Tr>
                            ))}
                        </tbody>
                    </Table>
                </SubContainer>
            </AnimateHeight>
        </Container>
    )
};

export default Legends;

const Icon = styled.i`
    margin-right: 10px;
`;

const Button = styled.button`
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    padding: 20px 30px;
    margin-bottom: 50px;
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
        filter: brightness(1.1);
        transform: translateY(-2px);
    }
    & span {
        margin-right: 5px;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: white;
    &:hover {
        text-decoration: underline;
    }
`;


const Tr = styled.tr`
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    & td {
        padding: 10px;
    }

`;

const TrHead = styled.tr`
    & th {
        background-color: #1e40af;
        padding: 10px;
    }
`;


const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    color: white;
    margin: 20px 0;
    
    & tr:nth-child(odd) {
        background-color: rgb(44 110 195);
    }
    & tr:nth-child(even) {
        background-color: rgb(15, 91, 190);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    & h2{
        margin-top: 0;
    }
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    padding: 20px;
`;
