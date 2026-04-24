import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { motion } from "motion/react";
import { Linkedin, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useMemo } from "react";

const foundersList = [
  {
    name: "Narendra A",
    role: "Co-Founder & CTO",
    quotes: [
      "I fix bugs… and sometimes create new ones for fun.",
      "Turning coffee into scalable systems since forever.",
      "If it crashes, I was probably experimenting.",
      "I make things work. Then I make them faster.",
      "Backend so strong, frontend doesn’t complain."
    ],
    image: "NA",
    linkedin: "https://www.linkedin.com/in/narendra-anbazhagan2106/",
    portfolio: "https://naren-portfolio.me"
  },
  {
    name: "Deekshana C S",
    role: "Co-Founder & COO / CAIO",
    quotes: [
      "I turn chaos into plans… and plans into results.",
      "Deadlines fear me.",
      "I make sure ideas don’t stay just ideas.",
      "Strategy first. Panic later (rarely needed).",
      "I keep things moving… even when devs don’t."
    ],
    image: "DS",
    linkedin: "https://www.linkedin.com/in/deekshana-c-s-921564292/",
    portfolio: "https://deekshanacs-portfolio.vercel.app/"
  }
];

const coreTeamList = [
  {
    name: "Dharsini J",
    role: "AI/ML Engineer",
    quotes: [
      "I teach machines… they sometimes listen.",
      "Making AI smarter than yesterday."
    ],
    image: "DJ",
    linkedin: "https://www.linkedin.com/in/dharsini-jayaprakash-a23b7a2a2/"
  },
  {
    name: "Dhinesha G",
    role: "UI/UX Designer",
    quotes: [
      "If users don’t notice my work, I’ve done it right.",
      "Fixing designs you didn’t know were broken."
    ],
    image: "DG",
    linkedin: "https://www.linkedin.com/in/dhinesha-g-673601292/"
  },
  {
    name: "Hardhik V",
    role: "AI/ML Engineer",
    quotes: [
      "I make machines think… or at least try to.",
      "Training models and my patience daily."
    ],
    image: "HV",
    linkedin: "https://www.linkedin.com/in/hardhik-v-bb55bb290/"
  },
  {
    name: "Kavinkumar S",
    role: "QA Tester",
    quotes: [
      "I break things professionally.",
      "If it can fail, I’ll make it fail."
    ],
    image: "KS",
    linkedin: "https://www.linkedin.com/in/kavin-kumar-subramaniam-02496b2a3/"
  },
  {
    name: "Keerthikumar R",
    role: "Digital Marketing Head",
    quotes: [
      "If it goes viral, I had a plan.",
      "Turning scrolling into sales."
    ],
    image: "KR",
    linkedin: "https://www.linkedin.com/in/keerthi-kumar-r-8a965b2a5/"
  },
  {
    name: "Sandhya Verma M",
    role: "Web Developer",
    quotes: [
      "It worked… because I fixed it.",
      "Turning bugs into features (sometimes)."
    ],
    image: "SM",
    linkedin: "https://www.linkedin.com/in/sandhya-verma-553101292/"
  }
];

function MemberCard({ member, isFounder = false, idx }: { member: any, isFounder?: boolean, idx: number }) {
  const randomBio = useMemo(() => {
    if (member.quotes) {
      return member.quotes[Math.floor(Math.random() * member.quotes.length)];
    }
    return member.bio;
  }, [member]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative bg-white border-[3px] md:border-4 border-black rounded-[1.25rem] md:rounded-[2rem] p-5 md:p-8 shadow-[6px_6px_0px_#000] md:shadow-[12px_12px_0px_#000] hover:shadow-none hover:translate-x-[4px] md:hover:translate-x-[6px] hover:translate-y-[4px] md:hover:translate-y-[6px] transition-all flex flex-col mb-4 md:mb-0 mr-2 md:mr-0`}
    >
      <div className={`absolute top-4 right-4 md:top-6 md:right-6 w-3 h-3 md:w-4 md:h-4 bg-[#FFFF00] rounded-full border-2 border-black`}></div>

      <div className="flex justify-between items-start mb-4 md:mb-8">
        <div className={`w-10 h-10 md:w-16 md:h-16 flex items-center justify-center text-lg md:text-2xl font-black rounded-lg md:rounded-xl border-2 border-black bg-black text-[#FFFF00]`}>
          {member.image}
        </div>
      </div>

      <h2 className={`text-xl md:text-3xl font-black text-black mb-1 uppercase tracking-tight`}>
        {member.name}
      </h2>
      
      <div className={`text-black/40 text-[9px] md:text-xs font-bold uppercase tracking-wider mb-3 md:mb-4`}>
        {member.role}
      </div>

      <p className="text-sm md:text-lg font-medium text-black/70 mb-6 md:mb-8 flex-1 font-sans italic leading-snug">
        "{randomBio}"
      </p>

      <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
        {member.linkedin && (
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#FFFF00] text-black px-3 py-1.5 md:py-2 font-black uppercase text-[8px] md:text-[10px] border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[1px] md:hover:translate-x-[2px] hover:translate-y-[1px] md:hover:translate-y-[2px] transition-all flex items-center gap-1.5 md:gap-2"
          >
            <Linkedin className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" /> LinkedIn
          </a>
        )}
        {member.portfolio && (
          <a 
            href={member.portfolio} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#FFFF00] text-black px-3 py-1.5 md:py-2 font-black uppercase text-[8px] md:text-[10px] border-2 border-black shadow-[2px_2px_0px_#000] md:shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[1px] md:hover:translate-x-[2px] hover:translate-y-[1px] md:hover:translate-y-[2px] transition-all flex items-center gap-1.5 md:gap-2"
          >
            <Globe className="w-3 h-3 md:w-4 md:h-4" /> Portfolio
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Team() {
  return (
    <div className="min-h-screen bg-[#FFFF00] selection:bg-black selection:text-[#FFFF00] overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-24 flex flex-col items-center">
        
        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] w-full p-6 md:p-16 border-4 border-black shadow-[8px_8px_0px_#000] md:shadow-[20px_20px_0px_#000] mb-12 md:mb-24">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-black text-[#FFFF00] px-4 md:px-6 py-1.5 md:py-2 mb-6 md:mb-8 shadow-[4px_4px_0px_rgba(255,107,107,1)] md:shadow-[6px_6px_0px_rgba(255,107,107,1)] -rotate-2"
            >
              <span className="text-xs md:text-lg font-black tracking-widest uppercase">The Collective</span>
            </motion.div>

            <h1 className="text-3xl sm:text-6xl md:text-9xl font-black text-black mb-4 md:mb-8 tracking-tighter leading-none uppercase break-words">
              Meet The <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #000" }}>Innovators</span>
            </h1>
            <p className="max-w-xl text-black/60 font-medium text-xs md:text-xl">
              The minds behind the magic. A diverse group of creators, thinkers, and engineers building the future of digital experiences.
            </p>
          </div>
        </div>

        <div className="w-full mb-16 md:mb-32">
          <div className="flex items-center gap-4 md:gap-8 mb-8 md:mb-16 px-2">
            <h2 className="text-xl md:text-5xl font-black uppercase tracking-tighter shrink-0 bg-black text-white px-4 md:px-8 py-1.5 md:py-2 -rotate-1">Founders</h2>
            <div className="h-1 bg-black flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full max-w-5xl mx-auto px-2">
            {foundersList.map((member, idx) => (
              <MemberCard key={member.name} member={member} isFounder={true} idx={idx} />
            ))}
          </div>
        </div>

        <div className="w-full mb-16 md:mb-32">
          <div className="flex items-center gap-4 md:gap-8 mb-8 md:mb-16 px-2">
            <div className="h-1 bg-black flex-1"></div>
            <h2 className="text-xl md:text-5xl font-black uppercase tracking-tighter shrink-0 bg-white border-2 md:border-4 border-black px-4 md:px-8 py-1.5 md:py-2 rotate-1">Core Team</h2>
            <div className="h-1 bg-black flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full px-2">
            {coreTeamList.map((member, idx) => (
              <MemberCard key={member.name} member={member} isFounder={false} idx={idx + 2} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mb-16 md:mb-32">
          <Link to="/">
            <motion.button 
              whileHover={{ x: -8, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-4 md:py-5 bg-black text-[#FFFF00] rounded-none border-[3px] md:border-4 border-black font-black text-base md:text-xl uppercase tracking-widest flex items-center gap-3 md:gap-4 shadow-[6px_6px_0px_#FFF] md:shadow-[8px_8px_0px_#FFF] hover:shadow-none transition-all"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 rotate-180" />
              Back to Home
            </motion.button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
