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
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

const secondaryLinks = [
  { label: "Projects", href: "/solopreneur-projects" },
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
        className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
          active
            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        }`}
        title={link.label}
        onClick={onMobileClose}
      >
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
            active
              ? "bg-blue-100 text-blue-700 dark:bg-blue-800/60 dark:text-blue-100"
              : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          }`}
        >
          {link.label.slice(0, 1)}
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
        className={`fixed left-0 top-0 z-50 flex h-full flex-col border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 ${
          isCollapsed ? "w-20" : "w-64"
        } ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              {initials || "NC"}
            </div>
            {!isCollapsed && (
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {userData.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {userData.designation}
                </p>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 lg:inline-flex"
            aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
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
            className="inline-flex rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
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

        <div className="px-3">
          <p
            className={`px-3 text-xs font-semibold uppercase tracking-wide text-gray-400 ${
              isCollapsed ? "sr-only" : ""
            }`}
          >
            Navigation
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            {primaryLinks.map(renderLink)}
          </nav>
        </div>

        <div className="mt-6 px-3">
          <p
            className={`px-3 text-xs font-semibold uppercase tracking-wide text-gray-400 ${
              isCollapsed ? "sr-only" : ""
            }`}
          >
            More
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            {secondaryLinks.map(renderLink)}
          </nav>
        </div>

        <div className="mt-auto px-3 pb-6">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
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
