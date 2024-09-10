import Link from "next/link";
import dynamic from "next/dynamic";
import { Typography } from "@/components/Typography";

const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), {
  ssr: false,
});

export const Header: React.FC = () => (
  <header className="border-dark-100/10 dark:border-light-100/5 mx-auto flex w-full items-center justify-between border-b shadow-sm">
    <nav className="navbar flex w-full items-center justify-between px-3">
      <div className="navbar-start">
        <a className="btn btn-ghost">
          <span className="text-dark-200 dark:text-light-200 text-xl">
            SearchX
          </span>
        </a>
      </div>

      <div className="navbar-end mr-6 flex items-center gap-5">
        <Link href="https://github.com/edo92/searchstax" target="_blank">
          <Typography
            size="sm"
            variant="span"
            className="hover:!text-primary-100 transition-colors duration-75 ease-in"
          >
            Github
          </Typography>
        </Link>

        <Link href="https://searchstax.vercel.app" target="_blank">
          <Typography
            size="sm"
            variant="span"
            className="hover:!text-primary-100 transition-colors duration-75 ease-in"
          >
            Live view
          </Typography>
        </Link>

        <div className="flex w-12 justify-end">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  </header>
);
