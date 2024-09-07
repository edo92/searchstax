"use client";

import { useTheme } from "next-themes";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/cn";

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className={cn(
        "btn btn-ghost ml-2 flex h-auto min-h-0 flex-col items-center p-0 ring-0",
        className
      )}
    >
      <Icons.LightBulb
        className="text-dark-300/85 dark:text-light-400 mt-0.5 aspect-square size-6 shrink-0 self-start"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      />
    </button>
  );
};
