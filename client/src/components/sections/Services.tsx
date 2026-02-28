import { motion } from "framer-motion";
import { Search, Target, Video, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Influencer Campaign Strategy",
    description: "Designing end-to-end full-scale influencer campaigns that support marketing initiatives and brand collaborations."
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Leading performance-based campaigns focusing on CPA and ROAS. Scaling campaigns with data-driven insights."
  },
  {
    icon: Target,
    title: "Community Building",
    description: "Building, growing, and managing online and offline communities. Organizing webinars, workshops, and AMAs."
  },
  {
    icon: Video,
    title: "Public Relations",
    description: "Building strategic relationships with media outlets, journalists, and high-profile influencers to maximize brand visibility."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            End-to-End Campaign Management
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic, full-service approach to turning creators into your most powerful acquisition channel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
