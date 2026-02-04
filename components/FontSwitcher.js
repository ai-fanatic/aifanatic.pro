import React, { useEffect, useState } from "react";

const fontOptions = [
  { label: "Inter", value: "inter" },
  { label: "Source Sans Pro", value: "source-sans" },
  { label: "OpenDyslexic", value: "dyslexic" },
  { label: "System UI", value: "system" },
];

export default function FontSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontChoice, setFontChoice] = useState("inter");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const storedFont = window.localStorage.getItem("font-preference");
    const isValid = fontOptions.some((option) => option.value === storedFont);
    const nextFont = isValid ? storedFont : "inter";
    setFontChoice(nextFont);
    document.documentElement.dataset.font = nextFont;
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleFontSelect = (value) => {
    setFontChoice(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("font-preference", value);
    }
    document.documentElement.dataset.font = value;
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-lg transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        aria-label="Change font"
        aria-expanded={isOpen}
      >
        Aa
      </button>

      {isOpen && (
        <div className="absolute bottom-14 right-0 w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-900">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Font
          </p>
          <div className="flex flex-col gap-1">
            {fontOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleFontSelect(option.value)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                  fontChoice === option.value
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <span>{option.label}</span>
                {fontChoice === option.value && (
                  <span className="text-xs font-semibold">Selected</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
