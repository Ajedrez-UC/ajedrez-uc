import styled from "styled-components";

function WhoAreWe() {
  return (
    <Container>
        <Title>¿Quiénes somos?</Title>
        <Description>
            <p>
                Hola! Somos la <Bold>selección de Ajedrez de la Pontificia Universidad Católica de Chile</Bold>.
                Nuestro objetivo es promover el ajedrez en la universidad y en la comunidad.
            </p>

            <span>
                <Icon className="fa fa-calendar" style={{fontSize: "1.5rem"}}></Icon>
                Disponible para ir de oyente los días <Bold>lunes y miércoles de 18:30 a 19:50 hrs</Bold>.
            </span>
            <span>
                <Icon className="fa fa-map-marker" style={{fontSize: "1.5rem"}}></Icon>
                Estamos ubicados en la <Bold>Sala Corporal N°3</Bold>, tercer piso de deportes, Campus San Joaquín.
            </span>
            <span>
                <Icon className="fa fa-info" style={{fontSize: "1.5rem"}}></Icon>
                Para más información puedes contactarnos a través de nuestro 
                <Link href="https://www.instagram.com/seleccionajedrezuc/" >
                instagram.
                </Link>
            </span>
        </Description>
    </Container>
  );
}

export default WhoAreWe;



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;
    padding: 20px 0;
    padding-top: 30px;
`;

const Title = styled.h2`
    margin: 10px 0;
    width: 100%;
    text-align: center;
`;

const Description = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
`;

const Icon = styled.i`
    width: 20px;
    text-align: center;
    margin-right: 10px;
    margin-top: 1px;
`;

const Link = styled.a`
    color: #0f172a;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
    font-weight: bold;
    &:hover{
        filter: brightness(1.2);
        text-decoration: underline;
    }
`;

const Bold = styled.span`
    font-weight: bold;
`;