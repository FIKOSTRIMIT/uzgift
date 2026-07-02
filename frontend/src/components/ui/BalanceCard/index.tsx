import GlassCard from "../GlassCard";
import Button from "../Button";

type BalanceCardProps = {
  balance: number;
};

export default function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <GlassCard className="p-6">
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-sm text-gray-400">💎 Your Balance</p>

          <h2 className="mt-2 text-4xl font-bold">
            {balance.toLocaleString()} Gems
          </h2>
        </div>

        <Button>
          + Top Up
        </Button>
      </div>
    </GlassCard>
  );
}