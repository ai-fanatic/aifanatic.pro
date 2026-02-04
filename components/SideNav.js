import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import userData from "@constants/data";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Bio", href: "/bio" },
  { label: "Blog", href: "/blog" },
  { label: "Experience", href: "/experience" },
  { label: "Work", href: "/work" },
  { label: "Speaking", href: "/speaking" },
  { label: "Judging", href: "/judging" },
  { label: "Contact", href: "/contact" },
];

const secondaryLinks = [
  { label: "Downloads", href: "/downloads" },
  { label: "Press", href: "/press" },
];

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const icons = {
  Home: (
    <path d="M3 10.5 12 3l9 7.5v9a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1z" />
  ),
  Bio: (
    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 9a7 7 0 0 1 14 0" />
  ),
  Blog: (
    <path d="M4 4h10a4 4 0 0 1 4 4v12H6a2 2 0 0 1-2-2zM8 8h6M8 12h6M8 16h4" />
  ),
  Experience: (
    <path d="M7 7h10M7 12h10M7 17h6M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  ),
  Work: (
    <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  ),
  Writing: (
    <path d="M4 19h16M6 16l8.5-8.5a2 2 0 0 1 2.8 2.8L8.8 18.8 6 19z" />
  ),
  Speaking: (
    <path d="M12 3a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zm-7 9a7 7 0 0 0 14 0M12 19v2" />
  ),
  Contact: (
    <path d="M4 4h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6l-4 3zM8 8h8M8 12h6" />
  ),
  Downloads: (
    <path d="M12 3v10m0 0 4-4m-4 4-4-4M4 17h16" />
  ),
  Press: (
    <path d="M4 5h12a4 4 0 0 1 4 4v8H8a4 4 0 0 1-4-4zM8 9h8M8 13h6" />
  ),
  Judging: (
    <path d="M12 3l3 4h4l-3 4 2 5-6-3-6 3 2-5-3-4h4z" />
  ),
};

const NavIcon = ({ label }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    {icons[label]}
  </svg>
);

export default function SideNav({
  isCollapsed,
  isMobileOpen,
  onToggleCollapse,
  onMobileToggle,
  onMobileClose,
}) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const initials = getInitials(userData.name);

  const isActive = (href) => {
    if (href === "/") {
      return router.asPath === "/";
    }
    return router.asPath === href || router.asPath.startsWith(`${href}/`);
  };

  const renderLink = (link) => {
    const active = isActive(link.href);
    return (
      <Link
        key={link.href}
        href={link.href}
        className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
          active
            ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 dark:bg-slate-800 dark:text-white"
            : "text-slate-600 hover:bg-slate-100 dark:text-slate-600 dark:hover:bg-slate-800/80"
        } ${isCollapsed ? "justify-center" : ""}`}
        title={link.label}
        onClick={onMobileClose}
      >
        {active && isCollapsed && (
          <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-full bg-slate-900 dark:bg-slate-200"></span>
        )}
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-semibold transition ${
            active
              ? "bg-white/15 text-white dark:bg-slate-900 dark:text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          }`}
        >
          <NavIcon label={link.label} />
        </span>
        <span className={`${isCollapsed ? "sr-only" : "truncate"}`}>
          {link.label}
        </span>
      </Link>
    );
  };

  return (
    <>
      {isMobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onMobileClose}
          aria-label="Close navigation"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full flex-col border-r border-slate-200 bg-white/95 backdrop-blur transition-all duration-300 dark:border-slate-800 dark:bg-slate-950/95 ${
          isCollapsed ? "w-20" : "w-72"
        } ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="px-4 pt-6">
          <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-md shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-800 dark:text-slate-100"
              onClick={onMobileClose}
              aria-label="Go to home"
              title="Home"
            >
              {initials || "NC"}
            </Link>
            {!isCollapsed && (
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                  {userData.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {userData.designation}
                </p>
              </div>
            )}
          </div>
            <button
              type="button"
              onClick={onToggleCollapse}
              className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 lg:inline-flex"
              aria-label={
                isCollapsed ? "Expand navigation" : "Collapse navigation"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isCollapsed ? (
                  <>
                    <polyline points="9 18 15 12 9 6" />
                    <line x1="5" y1="12" x2="9" y2="12" />
                  </>
                ) : (
                  <>
                    <polyline points="15 18 9 12 15 6" />
                    <line x1="9" y1="12" x2="19" y2="12" />
                  </>
                )}
              </svg>
            </button>
            <button
              type="button"
              onClick={onMobileToggle}
              className="inline-flex rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {!isCollapsed && (
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 text-xs text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
              Navigate quickly between sections or collapse the rail for focused
              reading.
            </div>
          )}
        </div>

        <div className="px-3 pt-6">
          <p
            className={`px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 ${
              isCollapsed ? "sr-only" : ""
            }`}
          >
            Main
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {primaryLinks.map(renderLink)}
          </nav>
        </div>

        <div className="mt-6 px-3">
          <p
            className={`px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 ${
              isCollapsed ? "sr-only" : ""
            }`}
          >
            More
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {secondaryLinks.map(renderLink)}
          </nav>
        </div>

        <div className="mt-auto px-3 pb-6">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M20.354 15.354A9 9 0 1 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
                </svg>
              )}
            </span>
            <span className={`${isCollapsed ? "sr-only" : ""}`}>
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}
