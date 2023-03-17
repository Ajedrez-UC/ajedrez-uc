import { IOpening } from "../utils/interfaces";
import { changePGNwithSymbols } from "../utils/functions";
import { Chessboard } from "react-chessboard";
import styled from "styled-components";
import MovesTable from "./MovesTable";
import lichess_svg from "../images/lichess.svg";

function Opening({opening}: {opening: IOpening}){

    const orientation = opening.orientation === "white" ? "white" : "black";

    return (
        <Container>
            <Title>{opening.name}</Title>
            <SubContainer>
                <BoardContainer>
                    <Chessboard
                        position={opening.fen}
                        arePiecesDraggable={false}
                        boardWidth={300}
                        boardOrientation={orientation}
                    />
                </BoardContainer>

                <InfoContainer>
                    <MovesTable pgn={changePGNwithSymbols(opening.pgn)} />
                    <Link href="https://lichess.org/study/rm5ouzlE">
                        <Logo src={lichess_svg} alt="Lichess" />
                        Ver estudio
                    </Link>
                    <p>Hecho por {opening.in_charge}</p>
                </InfoContainer>
            </SubContainer>
        </Container>
    );
}

export default Opening;

const Logo = styled.img`
    width: 20px;
    aspect-ratio: 1;
    margin: 0 5px;
    margin-top: 1px;
`;

const Link = styled.a`
    text-decoration: none;
    color: #0f172a;
    font-weight: bold;
    margin-top: 10px;
    display: flex;
    align-items: center;

    &:hover {
        filter: brightness(1.2);
        text-decoration: underline;
    }
`;

const Title = styled.h3`
    margin: 0 20px;
    text-align: center;
    padding-bottom: 15px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 20px 15px;
    margin: 10px;
    background-color: #f8fafc;
`;


const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const BoardContainer = styled.div`
    margin: 10px;
    border: 3px solid #0f172a;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 10px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;