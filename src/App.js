import "./App.css";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Header/Nav";
import Hero from "./component/hero/Hero";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("", "light");

  const newThemee = theme === "light" ? "dark" : "light";
  setTheme(newThemee);
  return (
    <div className="main-app">
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
