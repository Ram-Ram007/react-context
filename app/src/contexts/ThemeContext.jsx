import React, { createContext, useState } from "react";

// Create two context:
// ThemeContext: to query the context state
// ThemeDispatchContext: to mutate the context state
const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    value: "light",
    browser: "firefox",
  });

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext, ThemeDispatchContext };