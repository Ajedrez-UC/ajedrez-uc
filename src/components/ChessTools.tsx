import styled from "styled-components";
import lichess_svg from "../assets/lichess.svg";
import optree from "../assets/opening-tree-logo-white.png";
import knight_ex from "../assets/knight-exercises.png";


function ChessTools(){
    return (
        <Container>
            <SubContainer>
            <h2>Herramientas útiles</h2>
            <Links>
                <span>
                    <Image src={lichess_svg} style={{filter: "invert(1)"}} alt="Lichess" />
                    <Link href="https://lichess.org/">Lichess</Link>
                </span>
                <span>
                    <Image src={optree} alt="Opening Tree" />
                    <Link href="https://www.openingtree.com/">Opening Tree</Link>
                </span>
                <span>
                    <Image src={knight_ex} alt="Chess Knight Exercises" />
                    <Link href="https://alfremk.github.io/Chess-Knight-Exercises/">Chess Knight Exercises</Link>
                </span>
            </Links>
            </SubContainer>
        </Container>
    )
};

export default ChessTools;

const Image = styled.img`
    width: 20px;
    aspect-ratio: 1;
    margin: 0 10px;
    margin-top: 1px;
`;


const Links = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    & span {
        margin: 10px 0;
        display: flex;
        align-items: center;
    }
`;

const Container = styled.div`
    color: #f8fafc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #1e293b;
    padding: 20px 0;
    padding-bottom: 40px;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
`;

const Link = styled.a`
    color: #f8fafc;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    &:hover{
        filter: brightness(1.2);
        text-decoration: underline;
    }
`;