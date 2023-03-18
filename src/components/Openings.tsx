import { useState } from "react";
import openings_json from "../data/openings.json";
import { IOpening } from "../utils/interfaces";
import Opening from "./Opening";
import styled from "styled-components";

function Openings() {
  const [openings, setOpenings] = useState<IOpening[]>(openings_json);

  return (
    <Container>
      <SubContainer>
        <Title>Echa un vistazo a nuestras Estudios</Title>
        <OpContainer>
          {openings.map((opening) => (
            <Opening key={opening.id} opening={opening} />
          ))}
        </OpContainer>
      </SubContainer>
    </Container>
  );
}

export default Openings;


const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #cbd5e1;
  padding: 20px 0;
  padding-bottom: 40px;

`;


const OpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  margin: 30px 0;
  width: 100%;
  text-align: center;
`;