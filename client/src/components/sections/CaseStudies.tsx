import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import analyticsImage from "@/assets/images/analytics.jpg";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results & Case Studies
            </h2>
            <p className="text-lg text-muted/80">
              Real metrics from campaigns that drove tangible brand growth and ROI.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="#" className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors">
              View all work <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold tracking-wide">
                D2C Beauty Brand
              </div>
              <h3 className="text-3xl font-bold">Scaling Acquisition Through Micro-Influencers</h3>
              <p className="text-muted/80 text-lg">
                Shifted budget from macro-creators to a high-volume micro-influencer strategy on TikTok, significantly lowering CPA while maintaining brand prestige.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-muted/20">
              <div>
                <p className="text-4xl font-bold text-primary mb-1">3.2x</p>
                <p className="text-sm text-muted/60 uppercase tracking-wider">ROAS</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">-40%</p>
                <p className="text-sm text-muted/60 uppercase tracking-wider">CPA</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">12M</p>
                <p className="text-sm text-muted/60 uppercase tracking-wider">Impressions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img 
              src={analyticsImage} 
              alt="Analytics Dashboard" 
              className="w-full h-[400px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
