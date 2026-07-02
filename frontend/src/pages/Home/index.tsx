import BalanceCard from "../../components/ui/BalanceCard";
import QuickActions from "../../components/home/QuickActions";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <BalanceCard balance={12450} />

      <QuickActions />
    </div>
  );
}