import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Values from "./Components/Values/Values";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import Started from "./Components/Started/Started";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Values/>
      <Contact/>
      <Started/>
      <Footer/>
    </div>
  );
}

export default App;
