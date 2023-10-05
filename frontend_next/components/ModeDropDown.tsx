"use Client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ModeDropdown() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <SunIcon className="modeIcon rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="modeIcon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-50 dark:bg-black-200 mt-7 dark:text-white">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon className="dropDownIcons" />
          <span>Light</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon className="dropDownIcons" />
          <span>Dark</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          <DesktopIcon className="dropDownIcons" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
