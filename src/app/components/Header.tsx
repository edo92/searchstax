import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("./ThemeSwitch"), {
  ssr: false,
});

export const Header: React.FC = () => (
  <header className="border-b-0.5 border-dark-100/10 dark:border-light-100/10 mx-auto flex w-full items-center justify-between shadow-sm">
    <div className="navbar px-3">
      <div className="navbar-start">
        <a className="btn btn-ghost">
          <span className="text-dark-200 dark:text-light-200 text-xl">
            SearchX
          </span>
        </a>
      </div>
      <div className="navbar-end">
        <ThemeSwitch />
      </div>
    </div>
  </header>
);
