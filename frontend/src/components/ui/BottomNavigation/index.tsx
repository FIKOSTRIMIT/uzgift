import {
  House,
  Gift,
  Gamepad2,
  Users,
  User,
} from "lucide-react";

import BottomNavigationItem from "./BottomNavigationItem";

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
      <div className="flex items-center justify-around py-3">
        <BottomNavigationItem to="/" icon={House} label="Home" />

        <BottomNavigationItem
          to="/cases"
          icon={Gift}
          label="Cases"
        />

        <BottomNavigationItem
          to="/games"
          icon={Gamepad2}
          label="Games"
        />

        <BottomNavigationItem
          to="/friends"
          icon={Users}
          label="Friends"
        />

        <BottomNavigationItem
          to="/profile"
          icon={User}
          label="Profile"
        />
      </div>
    </nav>
  );
}