import styled from 'styled-components';


function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
  
    return (
      <Container
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Container>
            {children}
          </Container>
        )}
      </Container>
    );
  }
  
  export default TabPanel;
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;