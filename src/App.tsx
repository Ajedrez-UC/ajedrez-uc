import styled from "styled-components";
import PageTitle from "./components/PageTitle";
import WhoAreWe from "./components/WhoAreWe";
import People from "./components/People";
import PabloCalvo from "./components/PabloCalvo";
import ChessTools from "./components/ChessTools";
import Library from "./components/Library";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Legends from "./components/Legends";

function App() {
  return (
    <Container>
      <PageTitle/>
      <WhoAreWe/>
      <People/>
      <Legends/>
      <FAQ/>
      <Library/>
      <ChessTools/>
      <PabloCalvo/>
      <Footer/>
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