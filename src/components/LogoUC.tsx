import uc_logo from '../images/uc_logo.svg';
import styled from 'styled-components';


function LogoUC() {
    return (
        <Container>
            <Logo src={uc_logo} alt="puc" />
            <Title>Ajedrez UC</Title>
        </Container>
    );
}
export default LogoUC;


const Container = styled.div`
    margin: 0;
    position: relative;
`;


const Logo = styled.img`
    width: 100px;
    aspect-ratio: 1;
    margin: 0 5px;
`;

const Title = styled.div`
    margin: 0;
    position: absolute;
    font-weight: normal;
    top: 52px;
    left: 21px;
    font-size: 13px;
`;