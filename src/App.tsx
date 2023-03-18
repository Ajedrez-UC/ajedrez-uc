import Openings from "./components/Openings";
import styled from "styled-components";
import PageTitle from "./components/PageTitle";
import WhoAreWe from "./components/WhoAreWe";
import People from "./components/People";
import PabloCalvo from "./components/PabloCalvo";
import ChessTools from "./components/ChessTools";

function App() {
  return (
    <Container>
      <PageTitle/>
      <WhoAreWe/>
      <People/>
      <Openings/>
      <ChessTools/>
      <PabloCalvo/>
    </Container>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;