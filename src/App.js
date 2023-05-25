import "./App.css";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Header/Nav";
import Hero from "./component/hero/Hero";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="main-app">
      <Nav myTheme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
