import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images/hero-dashboard.jpg";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
              Driving Real Growth Through <span className="text-primary italic font-serif">Authentic</span> Voices.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Expert influencer strategy, brand-safe outreach, and data-driven performance tracking for brands ready to scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg hover:-translate-y-1 transition-transform">
                <a href="#contact">Book a Strategy Call</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base hover:-translate-y-1 transition-transform">
                <a href="#case-studies">View Case Studies</a>
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <p>Trusted by 50+ scaling D2C brands</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 blur-xl"></div>
            <img 
              src={heroImage} 
              alt="Influencer Dashboard Mockup" 
              className="rounded-[2rem] shadow-2xl border border-border/50 object-cover w-full h-[500px]"
            />
            
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border/50 animate-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Avg. Campaign ROI</p>
                  <p className="text-2xl font-bold text-foreground">324%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
