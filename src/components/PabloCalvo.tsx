import styled from "styled-components";
import pablo from "../images/pablo.jpg";

function PabloCalvo() {
    return (
        <Container>
            <SubContainer>
                <Bold style={{fontSize: "1.6rem"}}>En honor a Pablo Calvo.</Bold>
                <Image src={pablo} alt="Pablo Calvo" />

                <Bold style={{fontSize: "1.2rem"}}>Un gran ajedrecista y un gran amigo.</Bold>

                <Description>
                Una persona que dedicó su vida a plasmar esta bella disciplina en nuestras vidas,
                tanto a través de sus anécdotas como de su experiencia y amplio conocimiento.
                Alguien que nunca le cerró las puertas a quien quisiera adentrarse en el ajedrez siempre que tuviera la predisposición a aprender.
                Gracias por ser nuestro profesor y maestro.
                Siempre estarás en nuestros corazones y sabemos que donde sea que estés, nos seguirás acompañando.
                </Description>
            </SubContainer>
        </Container>
    )
};

export default PabloCalvo;

const Image = styled.img`
    width: 250px;
    margin: 20px;
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
    padding: 30px 0;
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