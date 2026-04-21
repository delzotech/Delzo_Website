import { Github, Twitter, Instagram, Youtube, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="bg-white border-t-[5px] border-black pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl mb-4" style={{ fontWeight: 900 }}>
              GAME<span className="text-purple-600">ZONE</span>
            </h3>
            <p className="text-gray-600 text-lg" style={{ fontWeight: 600 }}>
              Your ultimate gaming destination 🎮
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { icon: Twitter, color: "bg-blue-400" },
              { icon: Instagram, color: "bg-pink-500" },
              { icon: Youtube, color: "bg-red-500" },
              { icon: Github, color: "bg-gray-800" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <button
                  key={index}
                  className={`${social.color} p-4 rounded-2xl border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all`}
                >
                  <Icon className="w-6 h-6 text-black" strokeWidth={3} />
                </button>
              );
            })}
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            {["About", "Games", "Support", "Privacy", "Terms"].map((link) => (
              <button
                key={link}
                className="text-gray-700 hover:text-purple-600 transition-colors"
                style={{ fontWeight: 700 }}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t-[3px] border-black">
            <p className="text-gray-600 flex items-center justify-center gap-2" style={{ fontWeight: 600 }}>
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> by
              GameZone Team © 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

