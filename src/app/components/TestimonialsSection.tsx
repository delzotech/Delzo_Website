import { motion } from "motion/react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Elango K",
      role: "Managing Director, Skyscape Holidays",
      company: "Skyscape Holidays",
      content: "Delzo is something truly amazing. We made our oral requests and they turned them into a high-end website that was the need of the hour.Thanks to team Delzo!",
      rating: 5,
    },

  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
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
          className="text-center mb-16"
        >
          <div className="inline-block bg-transparent text-black px-6 py-2 rounded-full mb-6">
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>Testimonials</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
          >
            Trusted by <span className="text-[#FFFF00]">innovators</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid - Centered for single card */}
        <div className="flex justify-center px-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group max-w-2xl w-full"
            >
              <div className="bg-white border border-black/10 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFFF00] text-[#FFFF00]" />
                  ))}
                </div>

                {/* Content */}
                <p
                  className="text-black/80 mb-6 text-lg leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-black/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-gray-700 flex items-center justify-center">
                    <span
                      className="text-white text-lg"
                      style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}
                    >
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
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
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
