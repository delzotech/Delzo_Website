import { Sparkles, Star, Zap, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Controller Icon */}
        <div className="absolute top-20 left-[10%] animate-float">
          <div className="bg-pink-400 p-4 rounded-2xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rotate-[-15deg]">
            <Sparkles className="w-8 h-8 text-black" strokeWidth={3} />
          </div>
        </div>

        {/* Star */}
        <div className="absolute top-32 right-[15%] animate-bounce-slow">
          <div className="bg-yellow-300 p-3 rounded-full border-[3px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
            <Star className="w-6 h-6 text-black fill-black" strokeWidth={3} />
          </div>
        </div>

        {/* Lightning */}
        <div className="absolute bottom-40 left-[15%] animate-pulse">
          <div className="bg-green-400 p-4 rounded-xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rotate-[20deg]">
            <Zap className="w-8 h-8 text-black fill-white" strokeWidth={3} />
          </div>
        </div>

        {/* Trophy */}
        <div className="absolute bottom-32 right-[10%] animate-float">
          <div className="bg-purple-500 p-4 rounded-2xl border-[3px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rotate-[10deg]">
            <Trophy className="w-8 h-8 text-black" strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6">
          <div className="bg-pink-400 px-6 py-2 rounded-full border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <p className="text-black tracking-wider" style={{ fontWeight: 800 }}>
              🎮 YOUR ULTIMATE GAMING DESTINATION
            </p>
          </div>
        </div>

        <h1 className="mb-8">
          <div className="flex flex-col items-center gap-4">
            <span
              className="block text-6xl md:text-8xl tracking-tighter"
              style={{ fontWeight: 900, lineHeight: 1 }}
            >
              LET THE
            </span>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-purple-600 rounded-3xl transform rotate-[-2deg] border-[4px] border-black"></div>
              <span
                className="relative block text-6xl md:text-9xl tracking-tighter text-black px-12 py-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl border-[4px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
                style={{ fontWeight: 900, lineHeight: 1 }}
              >
                GAME
              </span>
            </div>
            <span
              className="block text-6xl md:text-8xl tracking-tighter"
              style={{ fontWeight: 900, lineHeight: 1 }}
            >
              BEGIN
            </span>
          </div>
        </h1>

        <p
          className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
          style={{ fontWeight: 700 }}
        >
          Join millions of players worldwide in the most exciting gaming
          adventures! 🚀
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-10 py-5 bg-gradient-to-br from-green-400 to-green-500 text-black rounded-2xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all text-xl" style={{ fontWeight: 900 }}>
            🎯 PLAY NOW
          </button>
          <button className="px-10 py-5 bg-white rounded-2xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all text-xl" style={{ fontWeight: 900 }}>
            🏆 TOP GAMES
          </button>
        </div>
      </div>
    </section>
  );
}

