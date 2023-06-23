import { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Hero from "./Hero";

import { ThemeContextProvider } from "../../contextApi/themeContext";

function ContextApp() {
  return (
    <ThemeContextProvider>
      <div className="main-app">
        <Nav />
        <Hero />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default ContextApp;
