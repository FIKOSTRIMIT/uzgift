export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#09090B]/80 px-5 py-4 backdrop-blur-xl">
      <div>
        <h1 className="text-xl font-bold text-white">UZGift</h1>
        <p className="text-xs text-gray-400">
          Telegram Gift Marketplace
        </p>
      </div>

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">
        <span className="font-semibold text-cyan-300">
          💎 202 Gems
        </span>
      </div>
    </header>
  );
}