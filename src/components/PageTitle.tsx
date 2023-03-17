import styled from "styled-components";
import LogoUC from "./LogoUC";

function PageTitle(){
    return (
        <Title>
            <LogoUC/>
            <h1>Ajedrez UC</h1>
        </Title>
    );
}

export default PageTitle;

const Title = styled.div`
    margin: 0;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(30 52 114);
    color: #f8fafc;
    padding: 10px;
    margin-bottom: 20px;

`;

const TitleUC = styled.h1`
    color: #60a5fa;
    font-weight: bold;
    margin: 0 10px;
`;