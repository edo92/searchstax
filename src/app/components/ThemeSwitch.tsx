"use client";

import { useTheme } from "next-themes";
import { Icons } from "@/components/Icons";

const ThemeSwitch: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleOnChange = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value="synthwave"
        onChange={handleOnChange}
      />

      <Icons.Sun className="swap-off text-dark-200 dark:text-light-200 mr-3 size-6" />
      <Icons.Moon className="swap-on text-dark-200 dark:text-light-200 mr-3 size-6" />
    </label>
  );
};

export default ThemeSwitch;
