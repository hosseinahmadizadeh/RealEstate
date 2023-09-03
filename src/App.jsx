import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
