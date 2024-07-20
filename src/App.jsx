import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Proyectos from "./pages/Proyectos/Proyectos";
import Educacion from "./pages/Educacion/Educacion";
import Tecnologias from "./pages/Tecnologias/Tecnologias";
import Contacto from "./pages/Contacto/Contacto";
import { darkTheme, lightTheme } from "./theme/theme";
import { motion } from "framer-motion";
import { GlobalStyle } from "./styles/GlobalStyles";
import { IconContext } from "react-icons";
import { PiMoonFill, PiSunDimFill } from "react-icons/pi";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

const Container = styled(motion.div)`
  max-width: 180rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const LayoutLeft = styled.aside`
  display: none;

  @media (min-width: 1200px) {
    display: block;
    width: 40%;
    padding: 2rem;
    height: 100vh;
    overflow: scroll;
  }
`;

const LayoutRight = styled.aside`
  display: none;
  width: 100%;

  @media (min-width: 1200px) {
    margin-top: 2rem;
    display: block;
    width: 60%;
    height: 90vh;
    padding: 2rem;
    overflow: scroll;
  }
`;

const ButtonTheme = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s linear;
`;

const MobileContainer = styled.main`
  width: 100%;
  padding: 1rem;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <IconContext.Provider
        value={{ color: currentTheme.iconColor, size: "4rem" }}
      >
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LayoutLeft>
            <ButtonTheme onClick={toggleTheme}>
              {theme === "light" ? <PiMoonFill /> : <PiSunDimFill />}
            </ButtonTheme>
            <LanguageSwitcher/>
            <Navbar />
          </LayoutLeft>
          <LayoutRight>
            <Header />
            <Home />
            <Proyectos />
            <Tecnologias />
            <Educacion />
            <Contacto />
          </LayoutRight>
          <MobileContainer>
            <ButtonTheme onClick={toggleTheme}>
              {theme === "light" ? <PiMoonFill /> : <PiSunDimFill />}
            </ButtonTheme>
            <LanguageSwitcher/>
            <Header />
            <Home />
            <Proyectos />
            <Tecnologias />
            <Educacion />
            <Contacto />
          </MobileContainer>
        </Container>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default App;
