import type { ReactNode } from "react";
import TopBar from "../TopBar";
import BottomNavigation from "../../ui/BottomNavigation";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col">
      {/* Верхняя панель */}
      <TopBar />

      {/* Основной контент */}
      <main className="flex-1 p-4 pb-28">
        {children}
      </main>

      {/* Нижняя навигация */}
      <BottomNavigation />
    </div>
  );
}