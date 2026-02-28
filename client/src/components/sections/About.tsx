import { motion } from "framer-motion";
import portraitImage from "@/assets/images/portrait.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-2xl transform -translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={portraitImage} 
                alt="Consultant Portrait" 
                className="rounded-2xl shadow-lg object-cover w-full h-[600px] grayscale-[20%]"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-7/12 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Strategy rooted in data, executed with authenticity.
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m an Influencer Marketing Consultant who believes that true growth comes from meaningful connections, not just vanity metrics. For over 8 years, I’ve helped D2C startups and established brands navigate the creator economy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach bridges the gap between creative storytelling and hard analytics. Whether you're looking to scale acquisition or build a lasting community, we design campaigns that resonate and convert.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="text-4xl font-bold text-foreground mb-2">150+</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Campaigns Launched</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-foreground mb-2">$12M+</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Revenue Generated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
