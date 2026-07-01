function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <div className="max-w-md mx-auto px-5 pt-8 pb-32">

        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">

          <p className="text-gray-400 text-sm">
            Welcome back 👋
          </p>

          <h1 className="text-3xl font-bold mt-2">
            Fee Man
          </h1>

          <div className="mt-6">

            <p className="text-gray-400 text-sm">
              Balance
            </p>

            <h2 className="text-4xl font-bold text-cyan-400">
              💎 202 Gems
            </h2>

          </div>

          <button className="mt-6 w-full h-12 rounded-2xl bg-cyan-500 font-semibold">
            + Top Up
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;