import Openings from "./components/Openings";
import styled from "styled-components";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <Container>
      <PageTitle/>
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
  width: 100%;
`;