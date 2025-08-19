import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const defaultValue = {
  theme: "darkTheme",
  setTheme: () => {},
  toggleTheme: () => {},
};

export const MainContext = createContext(defaultValue);

export const MainProvider = ({ children }) => {
  const [theme, setTheme] = useState("darkTheme");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "lightTheme" || stored === "darkTheme") {
        setTheme(stored);
      } else {
        localStorage.setItem("theme", "darkTheme");
      }
    } catch (_) {

    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "lightTheme") {
        document.body.classList.add("lightTheme");
      } else {
        document.body.classList.remove("lightTheme");
      }
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (_) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "lightTheme" ? "darkTheme" : "lightTheme"));
  };

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMain = () => useContext(MainContext);
