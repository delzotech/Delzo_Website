import { Play, Users, Star, Sparkles } from "lucide-react";

interface FeaturedGameProps {
  title: string;
  description: string;
  players: string;
  rating: number;
  bgColor: string;
}

export function FeaturedGame({
  title,
  description,
  players,
  rating,
  bgColor,
}: FeaturedGameProps) {
  return (
    <div className="relative bg-white rounded-[2rem] border-[5px] border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] overflow-hidden">
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 px-6 py-3 rounded-full border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[5deg] flex items-center gap-2">
          <Sparkles size={20} className="text-black" strokeWidth={3} />
          <span className="text-black" style={{ fontWeight: 900 }}>
            FEATURED
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div
          className={`${bgColor} flex items-center justify-center p-12 border-r-[5px] border-black min-h-[300px]`}
        >
          <div className="text-9xl opacity-60">🎯</div>
        </div>

        {/* Content Section */}
        <div className="p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-5xl mb-4" style={{ fontWeight: 900 }}>
              {title}
            </h2>
            <p className="text-xl text-gray-700" style={{ fontWeight: 600 }}>
              {description}
            </p>
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-xl border-[3px] border-black">
              <Users size={20} strokeWidth={3} />
              <span style={{ fontWeight: 700 }}>{players}</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-xl border-[3px] border-black">
              <Star
                size={20}
                className="text-yellow-600 fill-yellow-600"
                strokeWidth={3}
              />
              <span style={{ fontWeight: 700 }}>{rating}/5</span>
            </div>
          </div>

          <button className="flex items-center justify-center gap-3 py-5 bg-gradient-to-br from-green-400 to-green-500 text-black rounded-2xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all text-xl" style={{ fontWeight: 900 }}>
            <Play size={24} strokeWidth={3} fill="white" />
            START PLAYING
          </button>
        </div>
      </div>
    </div>
  );
}

