import { Search, Menu, Gamepad2 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-[4px] border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-2xl border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform hover:translate-y-[-2px] transition-transform cursor-pointer">
              <Gamepad2 className="w-8 h-8 text-black" strokeWidth={3} />
            </div>
            <span className="text-3xl tracking-tight" style={{ fontWeight: 900 }}>
              GAME<span className="text-purple-600">ZONE</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {["All Games", "Racing", "Action", "Sports"].map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded-xl border-[3px] border-black bg-white hover:bg-yellow-300 shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[5px_5px_0_0_rgba(0,0,0,1)] transform hover:translate-y-[-2px] transition-all"
                style={{ fontWeight: 700 }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="pl-12 pr-4 py-3 w-64 rounded-2xl border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:shadow-[6px_6px_0_0_rgba(0,0,0,1)] focus:translate-y-[-2px] transition-all outline-none"
                style={{ fontWeight: 600 }}
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-600"
                size={20}
                strokeWidth={3}
              />
            </div>
            <button className="md:hidden p-3 rounded-xl border-[3px] border-black bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
              <Menu size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

