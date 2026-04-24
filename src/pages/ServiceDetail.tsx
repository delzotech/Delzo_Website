import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Zap, Shield, TrendingUp, Cpu, Globe, MessageSquare } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

const serviceData: Record<string, any> = {
  "full-stack": {
    title: "Full Stack Development",
    heroSub: "From idea to scalable product — we build everything.",
    whatWeDo: [
      "Web apps (React / Next.js)",
      "Backend systems (FastAPI / Node)",
      "APIs & integrations",
      "Authentication systems"
    ],
    whatYouGet: [
      { title: "Fast performance", icon: <Zap className="w-6 h-6" /> },
      { title: "Secure systems", icon: <Shield className="w-6 h-6" /> },
      { title: "Built to scale", icon: <TrendingUp className="w-6 h-6" /> },
      { title: "Clean architecture", icon: <Cpu className="w-6 h-6" /> }
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "Tailwind"],
    work: [
      { name: "Skyscape", link: "https://skyscapeholidays.in" },
      { name: "Santhosh NC", link: "https://wedding.santhoshnc.me/" }
    ],
    color: "#FFFF00"
  },
  "ai-solutions": {
    title: "AI Solutions",
    heroSub: "Intelligent systems that actually learn and adapt.",
    whatWeDo: [
      "Custom LLM training",
      "AI Chatbots & Agents",
      "Predictive Analytics",
      "Computer Vision"
    ],
    whatYouGet: [
      { title: "Automated Insights", icon: <Cpu className="w-6 h-6" /> },
      { title: "24/7 Efficiency", icon: <Zap className="w-6 h-6" /> },
      { title: "Adaptive Logic", icon: <Brain className="w-6 h-6" /> },
      { title: "Future-proof tech", icon: <Shield className="w-6 h-6" /> }
    ],
    techStack: ["Python", "PyTorch", "OpenAI", "LangChain"],
    work: [
      { name: "ChatWithPDF", link: "#" },
      { name: "AI Agent Hub", link: "#" }
    ],
    color: "#FF9F1C"
  },
  "automation": {
    title: "Workflow Automation",
    heroSub: "Intelligent systems doing the hard work.",
    whatWeDo: [
      "Process Automation",
      "Internal Tooling",
      "Data Scraping",
      "CRMs & ERPs"
    ],
    whatYouGet: [
      { title: "Zero manual work", icon: <Shield className="w-6 h-6" /> },
      { title: "Error reduction", icon: <Zap className="w-6 h-6" /> },
      { title: "Cost efficiency", icon: <TrendingUp className="w-6 h-6" /> },
      { title: "Real-time sync", icon: <Globe className="w-6 h-6" /> }
    ],
    techStack: ["Node.js", "Python", "Zapier", "n8n"],
    work: [
      { name: "TMS Dashboard", link: "#" },
      { name: "AutoMailer", link: "#" }
    ],
    color: "#FF6B6B"
  },
  "digital-marketing": {
    title: "Digital Marketing",
    heroSub: "Turning scrolling into sales with data-driven strategy.",
    whatWeDo: [
      "SEO Optimization",
      "Content Strategy",
      "Paid Ad Campaigns",
      "Social Media Growth"
    ],
    whatYouGet: [
      { title: "High Conversion", icon: <TrendingUp className="w-6 h-6" /> },
      { title: "Viral Potential", icon: <Zap className="w-6 h-6" /> },
      { title: "Brand Identity", icon: <Globe className="w-6 h-6" /> },
      { title: "Data Insights", icon: <Target className="w-6 h-6" /> }
    ],
    techStack: ["Google Ads", "Meta Ads", "Ahrefs", "Semrush"],
    work: [
      { name: "Medium Blogs", link: "https://medium.com/@delzo.admin" },
      { name: "Social Hub", link: "#" }
    ],
    color: "#A855F7"
  }
};

function Brain({ className }: { className?: string }) {
  return <Cpu className={className} />;
}

function Target({ className }: { className?: string }) {
  return <Globe className={className} />;
}

export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId || ""];

  if (!service) return <div className="p-20 text-center font-black">Service not found</div>;

  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-[#FFFF00] selection:text-black overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-6 pt-12 pb-24">
        
        {/* Back Link */}
        <Link to="/#services" className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-bold uppercase text-sm mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-40">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black text-black mb-8 tracking-tighter uppercase leading-none"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl font-bold text-black/60 max-w-3xl"
          >
            {service.heroSub}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <a 
              href="https://wa.me/918190095181?text=Hi! I want to start a project with Delzo."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-10 py-5 rounded-full text-xl font-black uppercase shadow-2xl hover:scale-105 transition-all inline-block"
            >
              Start Project
            </a>
          </motion.div>
        </div>

        {/* 2. What We Do */}
        <section className="mb-32">
          <h2 className="text-3xl font-black uppercase mb-12 border-b-4 border-black inline-block">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whatWeDo.map((item: string, idx: number) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-white border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_#000]"
              >
                <div className="w-3 h-3 bg-black rounded-full" />
                <span className="text-xl font-bold">{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. What You Get */}
        <section className="mb-32 bg-black text-[#FFFF00] p-12 md:p-24 rounded-[3rem] shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 text-center">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {service.whatYouGet.map((item: any, idx: number) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FFFF00] text-black rounded-2xl flex items-center justify-center mb-6 shadow-[6px_6px_0px_#FFF]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Process */}
        <section className="mb-32">
          <h2 className="text-3xl font-black uppercase mb-12">Our Process</h2>
          <div className="flex flex-wrap gap-4 items-center">
            {["Plan", "Design", "Build", "Test", "Launch"].map((step, idx) => (
              <div key={step} className="flex items-center gap-4">
                <div className="bg-white border-4 border-black px-8 py-4 rounded-full font-black text-xl shadow-[6px_6px_0px_#000]">
                  {step}
                </div>
                {idx < 4 && <ArrowRight className="w-8 h-8 opacity-20 hidden md:block" />}
              </div>
            ))}
          </div>
        </section>

        {/* 5. Tech Stack */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black uppercase mb-8">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
              {service.techStack.map((tech: string) => (
                <span key={tech} className="bg-gray-100 border-2 border-black px-6 py-2 rounded-xl font-bold text-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* 6. Example Work */}
          <div className="bg-[#FFFF00] border-4 border-black p-10 rounded-[2rem] shadow-[12px_12px_0px_#000]">
            <h2 className="text-2xl font-black uppercase mb-6">Proven Results</h2>
            <div className="flex flex-col gap-4">
              {service.work.map((project: any) => (
                <a 
                  key={project.name} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center bg-white border-2 border-black p-4 rounded-xl hover:bg-black hover:text-white transition-all"
                >
                  <span className="font-bold text-xl">{project.name}</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="py-24 text-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase mb-12">Let's build your product</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="tel:8190095181"
              className="bg-[#FF9F1C] text-black border-4 border-black px-12 py-6 rounded-full text-2xl font-black uppercase shadow-[10px_10px_0px_#000] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all flex items-center gap-3"
            >
              Get Quote
            </a>
            <a 
              href="https://wa.me/918190095181?text=Hi! I want to start a project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-[#FFFF00] border-4 border-black px-12 py-6 rounded-full text-2xl font-black uppercase shadow-[10px_10px_0px_#000] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all flex items-center gap-3"
            >
              Start Project
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
