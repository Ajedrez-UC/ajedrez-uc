import Openings from "./components/Openings";
import styled from "styled-components";


function App() {
  return (
    <Container>
      <h1>Ajedrez UC</h1>
      <Openings />
    </Container>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;