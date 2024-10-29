import styled, { ThemeProvider } from 'styled-components' /* links de importação */
import { createGlobalStyle } from "styled-components"
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import InfoBoxes from './components/infoboxes/InfoBoxes';
import InfoSectionone from './components/infoSectionOne/InfoSectionone';
import InfoSectionTwo from './components/infoSectionTwo/InfoSectionTwo';
import InfoSectionThree from './components/infoSectionThree/InfoSectionThree';
import Teams from './components/team/Teams';
import InfoSectionFour from './components/infoSection/InfoSectionFour';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
}
  body {
    background-color: white;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    *{
      font-family: 'Roboto', sans-serif;
    }
  }
`;

const theme = { /* TEMA DAS CORES, PROPS */
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "darkBlue",
    bgSecondary: "darkBlue",
    bgLight: "aliceBlue",
  }
}

const Container = styled.div` /*Sempre colocar STYLED depois do = */
  background-color: white;
  height: 100vh;
`

function App() { /* TODO HTML E COMPONENTES */
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Container>
      <Navbar />
      <Hero />
      <InfoBoxes />
      <InfoSectionone />
      <InfoSectionTwo />
      <InfoSectionThree />
      <InfoSectionFour />
      <Teams />
      <Blogs />
      <Footer />
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
