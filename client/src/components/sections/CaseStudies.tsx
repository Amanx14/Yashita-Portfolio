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
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Story behind successful campaign
            </h2>
            <p className="text-lg text-muted/80">
              There are Several Campaigns, but one sucessful Brand Campaign I managed was Policybazaar. The situation was to Increase Brand awareness and lead generation in a competitive market. My Task was to develop a performance based campaign. I approached this by closely alligining with Brand's message and ensuring all promotional content was scheduled for optimal times. The result was 100% ROAS and significant boost in brand enegangement. This experience taught me the importance of aligning brand messaging with audience expectation and the power of timely execution  
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="https://www.instagram.com/reels/DFZkD_KsZQy/" className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors">
              View Link <ArrowUpRight size={20} />
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
                Fintech Brands Strategy
              </div>
              <h3 className="text-3xl font-bold">Scaling Influencer Budgets Through Performance</h3>
              <p className="text-muted/80 text-lg">
                Grew Stable Money’s influencer marketing budget from ₹1–2 lakhs per month to over ₹57 lakhs by delivering consistent ROI and onboarding top creators like Dhruv Rathee and Abhi & Niyu.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-muted/20">
              <div>
                <p className="text-4xl font-bold text-primary mb-1">83K</p>
                <p className="text-sm text-muted/60 uppercase tracking-wider">Top Reel Clicks</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">16K</p>
                <p className="text-sm text-muted/60 uppercase tracking-wider">YouTube Clicks</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-bold">Featured Work Samples</h4>
            <div className="grid gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
              <a href="https://www.instagram.com/bhatt_neil/reels/" target="_blank" rel="noreferrer" className="block p-3 border border-border/50 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm">Neil Bhatt</p>
                    <p className="text-xs text-muted/80">Gharsoap</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold text-sm">7000</p>
                    <p className="text-[10px] text-muted/60 uppercase">Clicks</p>
                    <p className="text-primary font-bold text-sm">View</p>
                  </div>
                </div>
              </a>
              <a href="https://www.instagram.com/reels/DMxYfwFNqJK/" target="_blank" rel="noreferrer" className="block p-3 border border-border/50 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm">Urfi Javed</p>
                    <p className="text-xs text-muted/80">Gharsoap</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold text-sm">10K+</p>
                    <p className="text-[10px] text-muted/60 uppercase">Clicks</p>
                    <p className="text-primary font-bold text-sm">View</p>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=39oDkmxdRNo" target="_blank" rel="noreferrer" className="block p-3 border border-border/50 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm">Dimpu's Vlogs</p>
                    <p className="text-xs text-muted/80">Stable Money</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold text-sm">1000</p>
                    <p className="text-[10px] text-muted/60 uppercase">Clicks</p>
                    <p className="text-primary font-bold text-sm">View</p>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/shorts/MvZ6_xfyW0Y" target="_blank" rel="noreferrer" className="block p-3 border border-border/50 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm">The Macho Bird</p>
                    <p className="text-xs text-muted/80">PolicyBazaar</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold text-sm">4000</p>
                    <p className="text-[10px] text-muted/60 uppercase">Clicks</p>
                    <p className="text-primary font-bold text-sm">View</p>
                  </div>
                </div>
              </a>
              <a href="https://www.instagram.com/reel/DVP8KgHkzA3/?igsh=MXg4N2c1bHluOWJtcg==" target="_blank" rel="noreferrer" className="block p-3 border border-border/50 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm">Suresh Guru</p>
                    <p className="text-xs text-muted/80">Zet App Integration</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold text-sm">5000</p>
                    <p className="text-[10px] text-muted/60 uppercase">Clicks</p>
                    <p className="text-primary font-bold text-sm">View</p>
                  </div>
                </div>
              </a>
              <a href="https://www.facebook.com/share/v/1HpnbTuF7P/" target="_blank" rel="noreferrer" className="block p-3 border border-border/50 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm">Saqib Saifi</p>
                    <p className="text-xs text-muted/80">PolicyBazaar Campaign</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold text-sm">4000</p>
                    <p className="text-[10px] text-muted/60 uppercase">Clicks</p>
                    <p className="text-primary font-bold text-sm">View</p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
