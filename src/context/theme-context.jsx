import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (ctx === null) {
    throw new Error("Context must be used within a context provider");
  }
  return ctx;
};
