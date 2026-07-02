import GlassCard from "../../ui/GlassCard";
import { Gift, Swords, Target, Users } from "lucide-react";

const actions = [
  {
    title: "Cases",
    icon: Gift,
  },
  {
    title: "Battle",
    icon: Swords,
  },
  {
    title: "Missions",
    icon: Target,
  },
  {
    title: "Friends",
    icon: Users,
  },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map(({ title, icon: Icon }) => (
        <GlassCard
          key={title}
          className="p-5 cursor-pointer hover:scale-[1.02] transition"
        >
          <Icon className="text-cyan-400" size={28} />

          <p className="mt-4 font-semibold">{title}</p>
        </GlassCard>
      ))}
    </div>
  );
}