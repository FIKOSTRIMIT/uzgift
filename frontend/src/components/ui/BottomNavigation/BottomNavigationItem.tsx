import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type Props = {
  to: string;
  icon: LucideIcon;
  label: string;
};

export default function BottomNavigationItem({
  to,
  icon: Icon,
  label,
}: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
          isActive ? "text-cyan-400 scale-105" : "text-gray-400 hover:text-white"
        }`
      }
    >
      <Icon size={22} />
      <span className="text-[11px]">{label}</span>
    </NavLink>
  );
}