import { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") setSwitchBtn(true);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchBtn }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export const useThemeContext = () => {
//   return useContext(ThemeContext);
// };

export default ThemeContext;
