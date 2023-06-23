import { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Hero from "./Hero";
import useLocalStorage from "use-local-storage";
import LightModeContext from "../../contextApi/themeContext";

function ContextApp() {
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
    <LightModeContext.Provider value={{ theme, toggleTheme, switchBtn }}>
      <div className="main-app">
        <Nav myTheme={theme} onToggleTheme={toggleTheme} onSwitch={switchBtn} />
        <Hero myTheme={theme} />
        <Footer myTheme={theme} />
      </div>
    </LightModeContext.Provider>
  );
}

export default ContextApp;
