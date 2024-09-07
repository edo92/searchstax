import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), {
  ssr: false,
});

export const Header: React.FC = () => (
  <header className="border-b-0.5 border-dark-100/10 dark:border-light-200/10 dark:border-b-px flex w-full items-center justify-center whitespace-nowrap shadow-sm max-md:max-w-full max-md:px-5">
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">SearchX</a>
      </div>
      <div className="navbar-end">
        <ThemeSwitch />
      </div>
    </div>
  </header>
);
