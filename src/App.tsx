import React from "react";
import Header from "./components/templates/Header";
import About from "./components/templates/About";
import Skills from "./components/templates/Skills";
import Footer from "./components/templates/Footer";
import Works from "./components/templates/Works";
import ReactHelmet from "./utils/ReactHelmet";

const App: React.FC = () => {
  return (
    <div id="home">
      <ReactHelmet />
      <Header />
      <About />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
