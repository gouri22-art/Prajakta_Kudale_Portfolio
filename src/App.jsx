import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubSection from "./components/GitHubCalender";
import Contact from "./components/Contact";
import GitHubCalendar from "react-github-calendar";

const App = () => {
  return (
      <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitHubSection />
      <Contact />
      </>
   
  );
};

export default App;
