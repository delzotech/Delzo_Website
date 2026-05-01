import { motion } from "motion/react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Elango K",
      role: "Managing Director",
      company: "Skyscape Holidays",
      content: "Delzo is something truly amazing. We made our oral requests and they turned them into a high-end website that was the need of the hour.Thanks to team Delzo!",
      rating: 5,
    },
    {
      name: "Mr. Santhosh N C",
      role: "Groom",
      company: "Wedding Website",
      content: "I’m genuinely amazed by the creativity and craftsmanship you’ve poured into this wedding website, it's nothing short of extraordinary. You didn’t just build a site, you created an experience that beautifully tells our story with elegance and emotion. Seeing my own mentees deliver work at this level is incredibly fulfilling and inspiring. Thanks for making my memorable day even more memorable and enjoyable with this website. Truly world-class work! 🌟",
      rating: 5,
    }
  ];

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block bg-transparent text-black px-6 py-2 rounded-full mb-6">
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Testimonials</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
          >
            Voices of the <span className="text-[#FFFF00]">bold</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group w-full h-full"
            >
              <div className="bg-white border border-black/10 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] flex flex-col h-full">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFFF00] text-[#FFFF00]" />
                  ))}
                </div>

                {/* Content */}
                <p
                  className="text-black/80 mb-8 text-lg leading-relaxed flex-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-black/10 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-gray-700 flex items-center justify-center shrink-0">
                      <span
                        className="text-white text-lg"
                        style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
                      >
                        {testimonial.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div
                        className="text-black"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                      >
                        {testimonial.name}
                      </div>
                      <div
                        className="text-black/60 text-sm"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                      >
                        {testimonial.role} {testimonial.company && `• ${testimonial.company}`}
                      </div>
                    </div>
                  </div>
                  {testimonial.link && (
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="ml-4 p-2 rounded-full border border-black/10 hover:bg-[#FFFF00] hover:border-black transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
