import "./App.css";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Header/Nav";
import Hero from "./component/hero/Hero";

function App() {
  return (
    <div className="main">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
