import uc_logo from '../assets/uc_logo.svg';
import styled from 'styled-components';
import ReactCurvedText from 'react-curved-text';


function LogoUC() {
    return (
        <Container>
            <Logo src={uc_logo} alt="puc" />
            
            <Title>
            <ReactCurvedText width='135'
                height='140'
                cx='66'
                cy='0'
                rx='100'
                ry={100}
                startOffset='135'
                reversed={false}
                text='Ajedrez UC'
                textProps={{"style": {fontSize: 8, fill: "white", fontFamily: "Tahoma"}}}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null} />
            </Title>
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
    top: -33px;
    left: -10px;
`;