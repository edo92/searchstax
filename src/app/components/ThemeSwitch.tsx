"use client";

import { useTheme } from "next-themes";
import { Icons } from "@/components/Icons";

export const ThemeSwitch: React.FC = () => {
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

      <Icons.Sun className="swap-off h-10 w-10 fill-current" />
      <Icons.Moon className="swap-on h-10 w-10 fill-current" />
    </label>
  );
};
