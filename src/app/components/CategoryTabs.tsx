import { Flame, Star, TrendingUp, Gamepad2 } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "popular", label: "Most Popular", icon: Flame, color: "bg-orange-400" },
  { id: "new", label: "New Releases", icon: Star, color: "bg-green-400" },
  { id: "trending", label: "Trending", icon: TrendingUp, color: "bg-pink-400" },
  { id: "all", label: "All Games", icon: Gamepad2, color: "bg-purple-500" },
];

export function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="flex gap-4 justify-center flex-wrap mb-12">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeTab === category.id;

        return (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl border-[4px] border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:shadow-[7px_7px_0_0_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all ${
              isActive ? category.color + " text-black" : "bg-white"
            }`}
          >
            <Icon size={24} strokeWidth={3} />
            <span className="text-lg" style={{ fontWeight: 800 }}>
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

