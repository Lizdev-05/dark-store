import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Header/Nav";
import Hero from "./component/hero/Hero";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") setSwitchBtn(true);
  }, []);

  return (
    <div className="main-app">
      <Nav myTheme={theme} onToggleTheme={toggleTheme} onSwitch={switchBtn} />
      <Hero myTheme={theme} />
      <Footer myTheme={theme} />
    </div>
  );
}

export default App;
