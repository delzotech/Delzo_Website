import { Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-transparent text-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4 group cursor-pointer hover:-translate-y-1 transition-transform inline-block">
              <img src="/Logo_only.png" alt="Delzo Logo" className="h-32 w-auto object-contain" />
            </div>
            <p
              className="text-black/60 mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              Think It. Delzo It.
            </p>
            <p
              className="text-black/40 text-sm"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              Delivering digital solutions at the speed of thought.
            </p>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4
              className="text-black mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#product" },
                { name: "Blog", href: "https://medium.com/@delzo.admin" },
                { name: "FAQ", href: "/faq" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-black/60 hover:text-[#FFFF00] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-1">
            <h4
              className="text-black mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}
            >
              Contact Us
            </h4>
            <div className="space-y-6">
              <div>
                <div className="text-black/40 text-xs font-bold uppercase tracking-wider mb-2">Drop an email</div>
                <a href="mailto:delzo.admin@gmail.com" className="text-black font-semibold text-sm hover:text-[#FFFF00] transition-colors inline-flex bg-black/5 px-3 py-1 rounded-md border border-black/10">
                  delzo.admin@gmail.com
                </a>
              </div>
              <div>
                <div className="text-black/40 text-xs font-bold uppercase tracking-wider mb-2">Give us a ring</div>
                <a href="tel:+919087842931" className="text-black font-semibold text-sm hover:text-[#FFFF00] transition-colors inline-flex bg-black/5 px-3 py-1 rounded-md border border-black/10">
                  +91 90878 42931
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p
            className="text-black/40 text-sm"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            © 2026 Delzo. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/delzo-technologies/" },
              { icon: Github, label: "GitHub", href: "https://github.com/delzotech" },
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/delzotech/" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 hover:border-[#FFFF00] transition-all group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-black/60 group-hover:text-[#FFFF00] transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}


