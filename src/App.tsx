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
import Fenaudes from "./components/Fenaudes";
import { useState } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HelpIcon from '@mui/icons-material/Help';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteIcon from '@mui/icons-material/Favorite';

import TabPanel from "./components/TabPanel";


const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#0284c7',
    },
    secondary: {
      main: '#f8fafc',
    },
  },
});



function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container>
      <PageTitle/>
      <TabContainer>
        <ThemeProvider theme={muiTheme}>
          <Tabs 
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              style={{width: "100%"}}
              >
            <Tab label="Nosotros" icon={<GroupsIcon />} {...a11yProps(0)} />
            <Tab label="Desempeño" icon={<EmojiEventsIcon />} {...a11yProps(1)} />
            <Tab label="FAQ" icon={<HelpIcon />} {...a11yProps(2)} />
            <Tab label="Útiles" icon={<MenuBookIcon />} {...a11yProps(3)} />
            <Tab label="Pablo Calvo" icon={<FavoriteIcon />} {...a11yProps(4)} />
          </Tabs>
        </ThemeProvider>
      </TabContainer>
      <TabPanel value={value} index={0}>
        <WhoAreWe/>
        <People/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Fenaudes/>
        <Legends/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FAQ/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Library/>
        <ChessTools/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PabloCalvo/>
      </TabPanel>

      <Footer/>
    </Container>
  );
}

export default App;


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;