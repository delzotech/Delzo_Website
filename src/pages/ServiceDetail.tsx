import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Zap, Shield, TrendingUp, Cpu, Globe, MessageSquare, Hotel, Car, Building2, GraduationCap, Utensils, Stethoscope, Leaf, Home, Plane } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

const serviceData: Record<string, any> = {
  "full-stack": {
    title: "Website Development",
    heroSub: "From idea to scalable product — we build everything.",
    whatWeDo: [
      "Web apps (React / Next.js)",
      "Backend systems (FastAPI / Node)",
      "APIs & integrations",
      "Authentication systems"
    ],
    processDetails: [
      {
        title: "Discovery & Strategy",
        desc: "We begin the web design process by carefully analyzing your business, audience, and industry trends. This helps us understand your goals and what your customers desire. Based on this, we design a website that fully captures and enhances your brand.",
        step: "01"
      },
      {
        title: "UI and UX Custom Design",
        desc: "Our team creates detailed mockup designs that reflect your brand and user expectations. With a strong focus on UI/UX, we ensure intuitive navigation, responsive layouts, and visually compelling interfaces that drive engagement.",
        step: "02"
      },
      {
        title: "Website Development",
        desc: "Once the design is approved, our developers build your website using modern, scalable technologies. Every detail is built with precision, beginning from the page structure to interactive elements, and optimized for SEO to help your site rank better on search engines.",
        step: "03"
      },
      {
        title: "Test, Launch & Support",
        desc: "We test your website on different browsers such as Chrome, Safari, Firefox, and others, as well as across multiple devices, to ensure it is optimized for speed, efficiency, and consistency. After launch, we provide ongoing technical support, updates, and improvements to keep your website performing well as your business grows.",
        step: "04"
      }
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "Tailwind"],
    work: [
      { name: "Skyscape", link: "https://skyscapeholidays.in" },
      { name: "Santhosh NC", link: "https://wedding.santhoshnc.me/" }
    ],
    industries: [
      {
        title: "Hotel & Resort Websites",
        desc: "We design high-converting websites for hotels and resorts focused on bookings, brand storytelling, and seamless guest experience. Fast, mobile-optimized, and built to turn visitors into confirmed stays.",
        icon: <Hotel className="w-8 h-8" />
      },
      {
        title: "Automobile & Spare Parts",
        desc: "We build structured, lead-focused websites for automobile businesses and spare parts dealers. Clear product displays, enquiry-driven layouts, and SEO-ready architecture help generate consistent, high-quality leads.",
        icon: <Car className="w-8 h-8" />
      },
      {
        title: "Construction & Real Estate",
        desc: "We create powerful digital platforms for builders and promoters to showcase projects, build credibility, and drive enquiries. Clean design, fast performance, and trust-focused presentation come standard.",
        icon: <Building2 className="w-8 h-8" />
      },
      {
        title: "Education Institutions",
        desc: "We design intuitive websites for schools and colleges that simplify information, streamline admissions, and enhance communication. Built for clarity, accessibility, and easy management.",
        icon: <GraduationCap className="w-8 h-8" />
      },
      {
        title: "Food & Restaurant Businesses",
        desc: "We craft visually rich websites for restaurants and cafés that highlight menus, ambience, and brand identity—designed to attract customers and boost online presence.",
        icon: <Utensils className="w-8 h-8" />
      },
      {
        title: "Healthcare Providers",
        desc: "We build professional healthcare websites that prioritize trust, clarity, and accessibility—helping clinics and medical providers communicate services effectively and attract patient enquiries.",
        icon: <Stethoscope className="w-8 h-8" />
      },
      {
        title: "Agriculture Businesses",
        desc: "We design clean, informative websites for agriculture-based businesses to showcase products and services while building trust and improving online reach.",
        icon: <Leaf className="w-8 h-8" />
      },
      {
        title: "Household & Home Products",
        desc: "We create product-focused websites that highlight features, improve presentation, and drive customer enquiries with a smooth, user-friendly experience.",
        icon: <Home className="w-8 h-8" />
      },
      {
        title: "Tours & Travel",
        desc: "We build engaging travel websites that present packages clearly, build trust, and encourage bookings through fast, responsive, and visually compelling design.",
        icon: <Plane className="w-8 h-8" />
      }
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
    processDetails: [
      {
        title: "Data Audit & Strategy",
        desc: "We analyze your existing data infrastructure and business goals to identify high-impact AI opportunities. We don't just add AI; we solve specific bottlenecks with intelligent logic.",
        step: "01"
      },
      {
        title: "Custom Model Architecture",
        desc: "Our team designs custom AI architectures, from RAG-based LLM implementations to predictive analytics models, ensuring the solution is perfectly tuned to your unique datasets.",
        step: "02"
      },
      {
        title: "Integration & Scaling",
        desc: "We seamlessly integrate AI modules into your existing software stack. Every implementation is built to scale, handling increasing data loads while maintaining accuracy and speed.",
        step: "03"
      },
      {
        title: "Performance Monitoring",
        desc: "After launch, we continuously monitor model performance, fine-tuning responses and logic to ensure your AI remains accurate, ethical, and aligned with your evolving business needs.",
        step: "04"
      }
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
    processDetails: [
      {
        title: "Process Mapping",
        desc: "We deep-dive into your daily operations to map out manual, repetitive tasks that drain your team's time. We identify every touchpoint where automation can save hours.",
        step: "01"
      },
      {
        title: "Architecture Design",
        desc: "We design robust automation workflows using tools like n8n, Zapier, or custom scripts. We ensure that data flows securely and reliably between all your different software platforms.",
        step: "02"
      },
      {
        title: "Development & Logic",
        desc: "Our developers build the automation engine, implementing complex branching logic and error-handling to ensure that your workflows never fail, even with edge cases.",
        step: "03"
      },
      {
        title: "Deployment & Training",
        desc: "We deploy the automations and provide clear documentation. We monitor the initial runs to ensure 100% reliability, freeing your team to focus on high-value creative work.",
        step: "04"
      }
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
    processDetails: [
      {
        title: "Market Intelligence",
        desc: "We start by analyzing your competitors and audience behavior. We identify the high-intent keywords and social trends that will drive the most profitable traffic to your brand.",
        step: "01"
      },
      {
        title: "Creative Content Strategy",
        desc: "We develop a content engine that produces high-converting ads, blogs, and social posts. Our focus is on brand storytelling that resonates and turns casual scrollers into loyal customers.",
        step: "02"
      },
      {
        title: "Performance Optimization",
        desc: "We manage and optimize your ad spend across platforms like Google and Meta. Using A/B testing and data analytics, we continuously refine campaigns to maximize your ROI.",
        step: "03"
      },
      {
        title: "Growth Analysis",
        desc: "We provide transparent, data-driven reports on your growth. We don't just look at clicks; we track conversions and revenue, adjusting our strategy to ensure consistent business scaling.",
        step: "04"
      }
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
  const navigate = useNavigate();
  const service = serviceData[serviceId || ""];

  if (!service) return <div className="p-20 text-center font-black">Service not found</div>;

  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-[#FFFF00] selection:text-black overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-6 pt-12 pb-24">
        
        {/* Back Link */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-bold uppercase text-sm mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </button>

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
              href={`https://wa.me/918190095181?text=Hi! I want to start a project for ${service.title} with Delzo.`}
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
        
        {/* Industries We Serve (Specific to Web Dev) */}
        {service.industries && (
          <section className="mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">Industries We <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Empower</span></h2>
                <p className="text-xl font-medium text-black/50">Tailored digital solutions for industry-specific challenges.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.industries.map((industry: any, idx: number) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border-4 border-black p-8 rounded-[2.5rem] shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#FFFF00] hover:-translate-y-2 transition-all group"
                >
                  <div className="w-16 h-16 bg-[#FFFF00] border-4 border-black rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000] group-hover:rotate-12 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-tight">{industry.title}</h3>
                  <p className="font-medium text-black/60 leading-relaxed">{industry.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* 3. What We Do (Process Detail) */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">What We <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Do</span></h2>
              <p className="text-xl font-medium text-black/50">Our meticulous process ensures every project is a masterpiece.</p>
            </div>
          </div>

          {service.processDetails ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {service.processDetails.map((item: any, idx: number) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-6xl md:text-8xl font-black text-black/5 select-none leading-none group-hover:text-[#FFFF00]/40 transition-colors duration-500">
                        {item.step}
                      </span>
                    </div>
                    <div className="pt-4 md:pt-8">
                      <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-lg font-medium text-black/60 leading-relaxed max-w-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-black text-[#FFFF00] p-12 md:p-24 rounded-[3rem] shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
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
            </div>
          )}
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
              href={`https://wa.me/918190095181?text=Hi! I would like to get a quote for ${service.title}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF9F1C] text-black border-4 border-black px-12 py-6 rounded-full text-2xl font-black uppercase shadow-[10px_10px_0px_#000] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all flex items-center gap-3"
            >
              Get Quote
            </a>
            <a 
              href={`https://wa.me/918190095181?text=Hi! I want to start a project for ${service.title} with Delzo.`}
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
