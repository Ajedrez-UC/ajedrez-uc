import styled from "styled-components";
import pablo from "../images/pablo.jpg";
import phrases_pablo from "../data/phrases_pablo.json";

function PabloCalvo() {
  const phrases = JSON.parse(JSON.stringify(phrases_pablo));
  return (
    <Container>
      <SubContainer>
        <Bold style={{ fontSize: "1.6rem" }}>En honor a Pablo Calvo.</Bold>
        <Image src={pablo} alt="Pablo Calvo" />

        <Bold style={{ fontSize: "1.2rem" }}>
          Un gran ajedrecista y un gran amigo.
        </Bold>

        <Description>
          Una persona que dedicó su vida a plasmar esta bella disciplina en
          nuestras vidas, tanto a través de sus anécdotas como de su experiencia
          y amplio conocimiento. Alguien que nunca le cerró las puertas a quien
          quisiera adentrarse en el ajedrez siempre que tuviera la
          predisposición a aprender. Gracias por ser nuestro profesor y maestro.
          Siempre estarás en nuestros corazones y sabemos que donde sea que
          estés, nos seguirás acompañando.
        </Description>
        <Bold style={{ fontSize: "1.6rem", margin: "30px" }}>
          Frases célebres del maestro
        </Bold>
        <PhrasesContainer>
          {phrases.map((phrase: string, index: number) => (
            <Phrase key={index}>{upperCaseFirstLetter(phrase)}</Phrase>
          ))}
        </PhrasesContainer>
      </SubContainer>
    </Container>
  );
}

export default PabloCalvo;

const upperCaseFirstLetter = (word: string) =>
  word[0].toUpperCase() + word.slice(1);

const Phrase = styled.div`
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f8fafc;
  color: #111827;
  font-style: italic;
`;

const PhrasesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const Image = styled.img`
  width: 250px;
  margin: 30px 0;
  border-radius: 50%;
  filter: grayscale(1);
  border: 4px solid #f8fafc;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #111827;
  color: #f8fafc;
  padding: 50px 0;
  background-size: cover;
`;

const Description = styled.div`
  margin: 15px;
  text-align: justify;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 20px 0;
`;

const Bold = styled.span`
  font-weight: bold;
  display: inline-block;
  margin: 0 5px;
`;
