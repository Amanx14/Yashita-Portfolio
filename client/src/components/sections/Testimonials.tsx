import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They completely transformed our creator strategy. We moved from vanity metrics to actual measurable growth within a single quarter.",
    author: "Sarah Jenkins",
    role: "CMO, Bloom Cosmetics"
  },
  {
    quote: "The level of professionalism and the deep understanding of the TikTok algorithm is unmatched. Best agency partner we've worked with.",
    author: "David Chen",
    role: "Founder, TechFit"
  },
  {
    quote: "Authenticity is hard to scale, but they managed to find the exact voices that aligned with our core values and drove real conversions.",
    author: "Elena Rodriguez",
    role: "VP Marketing, Aura Apparel"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Trusted by Growth Leaders
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-secondary/50 border border-border relative"
            >
              <Quote className="text-primary/20 w-12 h-12 absolute top-6 left-6" />
              <div className="relative z-10 pt-6">
                <p className="text-lg text-foreground mb-6 font-medium italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
