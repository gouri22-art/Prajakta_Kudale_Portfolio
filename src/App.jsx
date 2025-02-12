import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubSection from "./components/GitHubCalendar";
import Contact from "./components/Contact";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitHubSection />
      <Contact />
    </ChakraProvider>
  );
};

export default App;
