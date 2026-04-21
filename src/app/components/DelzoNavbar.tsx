import { useState, useEffect } from "react";

export function DelzoNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 md:pt-6 px-4 md:px-6 lg:px-12 ${
        scrolled ? "bg-white/90 backdrop-blur-md pb-4 pt-4 shadow-sm" : "bg-transparent pb-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer hover:-translate-y-1 transition-transform">
          <img src="/dz-logo.jpg" alt="Delzo Logo" className="h-10 md:h-14 lg:h-[4.5rem] w-auto rounded-lg shadow-sm" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            {
              title: "Solutions",
              options: [
                { name: "Full Stack Dev", href: "#services" },
                { name: "AI Solutions", href: "#services" },
                { name: "Automation", href: "#services" },
                { name: "Marketing", href: "#services" }
              ]
            },
            {
              title: "Resources",
              options: [
                { name: "Blog", href: "#" },
                { name: "Help Center", href: "#" },
                { name: "API Docs", href: "#" },
                { name: "Community", href: "#" }
              ]
            },
            {
              title: "About",
              options: [
                { name: "About Us", href: "#about" },
                { name: "Our Team", href: "#about" },
                { name: "Email: delzo.admin...", href: "mailto:delzo.admin@gmail.com" },
                { name: "Call: 9087842931", href: "tel:9087842931" }
              ]
            }
          ].map((navItem) => (
            <div
              key={navItem.title}
              className="relative group cursor-pointer"
            >
              <div className="text-black hover:text-black transition-colors text-sm font-bold flex items-center gap-1 py-4">
                {navItem.title}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                 <div className="w-48 bg-white border-2 border-black rounded-xl p-2 shadow-[6px_6px_0px_#000] flex flex-col gap-1">
                    {navItem.options.map((opt) => (
                       <a 
                         key={opt.name} 
                         href={opt.href}
                         className="px-4 py-2 text-sm font-medium text-black rounded-lg hover:bg-[#FFFF00] hover:translate-x-1 transition-all"
                       >
                         {opt.name}
                       </a>
                    ))}
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="bg-transparent text-black px-4 py-2 text-xs md:px-6 md:py-2.5 md:text-sm rounded-full hover:bg-transparent/80 transition-all hover:-translate-y-0.5 font-semibold shadow-md border border-black/10"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}


