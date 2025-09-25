import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/theme-context";
import { useEffect } from "react";

function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  });

  return (
    <button
      onClick={toggleTheme}
      className="bg-[#6C63FF] text-white p-2 rounded cursor-pointer hover:bg-[#5850DD]"
    >
      {theme ? <IoSunnyOutline /> : <FaMoon />}
    </button>
  );
}

export default ThemeBtn;
