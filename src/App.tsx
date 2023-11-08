import React from "react";
import Header from "./components/templates/Header";
import About from "./components/templates/About";
import Skills from "./components/templates/Skills";
import Footer from "./components/templates/Footer";
import Works from "./components/templates/Works";

const App: React.FC = () => {
  return (
    <div id="home">
      <Header />
      <About />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
