import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Solutions",
      options: [
        { name: "Full Stack Dev", href: "/#services" },
        { name: "AI Solutions", href: "/#services" },
        { name: "Automation", href: "/#services" },
        { name: "Our Work", href: "/our-work" }
      ]
    },
    {
      title: "Resources",
      options: [
        { name: "Blog", href: "https://medium.com/@delzo.admin" }
      ]
    },
    {
      title: "About",
      options: [
        { name: "About Us", href: "/#product" },
        { name: "Our Team", href: "/team" },
        { name: "Email: delzo.admin...", href: "mailto:delzo.admin@gmail.com" },
        { name: "Call: 8190095181", href: "tel:8190095181" }
      ]
    }
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 md:px-6 lg:px-12 bg-white/95 backdrop-blur-md py-2 border-b-2 border-black/10 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer hover:-translate-y-1 transition-transform">
          <img src="/Logo_only.png" alt="Delzo Logo" className="h-10 md:h-14 lg:h-16 w-auto object-contain" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((navItem) => (
            <div
              key={navItem.title}
              className="relative group cursor-pointer"
            >
              <div className="text-black hover:text-black transition-colors text-sm font-bold flex items-center gap-1 py-4">
                {navItem.title}
                <ChevronDown className="w-4 h-4 mt-0.5 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                 <div className="w-48 bg-white border-2 border-black rounded-xl p-2 shadow-[6px_6px_0px_#000] flex flex-col gap-1">
                    {navItem.options.map((opt) => (
                       <a 
                         key={opt.name} 
                         href={opt.href}
                         target={opt.href.startsWith('http') ? "_blank" : undefined}
                         rel={opt.href.startsWith('http') ? "noopener noreferrer" : undefined}
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

        {/* Action Buttons & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('start-storyboard'));
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden sm:block bg-black text-[#FFFF00] px-6 py-2.5 text-sm rounded-full hover:bg-black/80 transition-all hover:-translate-y-0.5 font-bold shadow-[4px_4px_0px_rgba(0,0,0,0.2)] border-2 border-black"
          >
            Get Started
          </button>
          
          <button 
            className="md:hidden p-2 text-black border-2 border-black rounded-lg bg-white shadow-[4px_4px_0px_#000]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[4.5rem] bg-[#FFFF00] z-[100] md:hidden p-6 flex flex-col border-t-4 border-black animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6 overflow-y-auto pb-20">
            {navItems.map((navItem) => (
              <div key={navItem.title} className="flex flex-col border-b-2 border-black/10 pb-4">
                <button 
                  className="flex items-center justify-between w-full text-2xl font-black uppercase text-black py-2"
                  onClick={() => setActiveMobileDropdown(activeMobileDropdown === navItem.title ? null : navItem.title)}
                >
                  {navItem.title}
                  <ChevronDown className={`w-6 h-6 transition-transform ${activeMobileDropdown === navItem.title ? 'rotate-180' : ''}`} />
                </button>
                
                {activeMobileDropdown === navItem.title && (
                  <div className="flex flex-col gap-3 mt-4 pl-4 animate-in fade-in slide-in-from-top-2">
                    {navItem.options.map((opt) => (
                      <a 
                        key={opt.name} 
                        href={opt.href}
                        onClick={() => setMobileMenuOpen(false)}
                        target={opt.href.startsWith('http') ? "_blank" : undefined}
                        rel={opt.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-lg font-bold text-black/70 hover:text-black transition-colors"
                      >
                        {opt.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('start-storyboard'));
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-4 bg-black text-[#FFFF00] px-8 py-4 text-xl rounded-2xl font-black uppercase shadow-[8px_8px_0px_rgba(0,0,0,0.4)] border-4 border-black"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}


