"use Client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeDropdown() {
  const [mode, setMode] = useState(localStorage.theme);

  useEffect(() => {
    if (
      mode === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {mode === "dark" ? (
          <MoonIcon className="modeIcon" />
        ) : (
          <SunIcon className="modeIcon" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 dark:bg-black-200 mt-7 dark:text-white">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => {
              setMode("light");
              localStorage.theme = "light";
            }}
          >
            <SunIcon className="dropDownIcons" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              setMode("dark");
              localStorage.theme = "dark";
            }}
          >
            <MoonIcon className="dropDownIcons" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              localStorage.removeItem("theme");
              if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ) {
                localStorage.theme = "dark";
                setMode("dark");
              } else {
                localStorage.theme = "light";
                setMode("light");
              }
            }}
          >
            <DesktopIcon className="dropDownIcons" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
