import { useState } from "react";
import openings_json from "../data/openings.json";
import { IOpening } from "../utils/interfaces";
import Opening from "./Opening";
import styled from "styled-components";

function Openings() {
  const [openings, setOpenings] = useState<IOpening[]>(openings_json);

  return (
    <Container>
      <Title>Echa un vistazo a nuestras Aperturas</Title>
      <OpContainer>
        {openings.map((opening) => (
          <Opening key={opening.id} opening={opening} />
        ))}
      </OpContainer>
    </Container>
  );
}

export default Openings;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;


const OpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;