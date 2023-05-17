import "./App.css";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Header/Nav";
import Hero from "./component/hero/Hero";

function App() {
  return (
    <div className="App">
      This is the app page
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
