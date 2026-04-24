import { Users, Star } from "lucide-react";

interface GameCardProps {
  title: string;
  players: string;
  rating: number;
  badge?: string;
  badgeColor?: string;
  imageColor: string;
}

export function GameCard({
  title,
  players,
  rating,
  badge,
  badgeColor = "bg-pink-400",
  imageColor,
}: GameCardProps) {
  return (
    <div className="group relative bg-white rounded-3xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all cursor-pointer overflow-hidden">
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <div
            className={`${badgeColor} px-4 py-2 rounded-full border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] rotate-[8deg]`}
          >
            <span className="text-black text-sm" style={{ fontWeight: 800 }}>
              {badge}
            </span>
          </div>
        </div>
      )}

      {/* Image Placeholder */}
      <div
        className={`${imageColor} h-48 flex items-center justify-center border-b-[4px] border-black`}
      >
        <div className="text-6xl opacity-50">🎮</div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-3 text-xl" style={{ fontWeight: 800 }}>
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Users size={16} strokeWidth={3} />
            <span style={{ fontWeight: 700 }}>{players}</span>
          </div>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="text-yellow-500 fill-yellow-500"
              strokeWidth={3}
            />
            <span style={{ fontWeight: 700 }}>{rating}</span>
          </div>
        </div>

        <button className="w-full mt-4 py-3 bg-gradient-to-br from-purple-500 to-pink-500 text-black rounded-xl border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all" style={{ fontWeight: 800 }}>
          PLAY NOW
        </button>
      </div>
    </div>
  );
}

