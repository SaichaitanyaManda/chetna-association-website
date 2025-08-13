import { Menu, Moon, Sun, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/context/ThemeProvider";

interface SidebarProps {
  onMenuToggle: () => void;
}

export default function Sidebar({ onMenuToggle }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="sidebar bg-chetna-red flex md:flex-col items-center justify-between md:justify-start p-4 md:py-8">
      {/* Logo/Brand */}
      <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg mb-0 md:mb-8 flex-shrink-0">
        <Users className="text-chetna-red" size={20} />
      </div>

      {/* Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onMenuToggle}
        className="text-white hover:bg-white/20 p-2 md:mb-8"
        data-testid="button-menu"
      >
        <Menu size={20} />
      </Button>

      {/* Theme Toggle - Desktop only */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="hidden md:flex text-white hover:bg-white/20 p-2"
        data-testid="button-theme-toggle"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    </div>
  );
}