import { motion } from "framer-motion";
import portraitImage from "@/assets/images/portrait.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* <motion.div 
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
          </motion.div> */}

          <motion.div
            className="w-full space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Driving Results with 1,00,000+ Creators Directly.
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Dynamic Influencer Marketing Professional with over 4+ years of experience leading full-funnel campaigns. Assistant Manager at Geo Ads Private Limited.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've built campaigns generating over 250% ROAS, single-handedly managed campaigns for Policy Bazaar and Stable Money, and scaled a client's monthly influencer budget from ₹2 lakhs to ₹57 lakhs through demonstrated performance.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="text-4xl font-bold text-foreground mb-2">1K+</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Creators</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-foreground mb-2">250%</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Avg ROAS</p>
              </div>
              <div className="col-span-2 space-y-2">
                <h4 className="text-xl font-bold text-foreground">Education</h4>
                <div className="text-sm text-muted-foreground">
                  <p><strong className="text-foreground">MBA (Marketing & HR)</strong></p>
                  <p>GLA, Mathura (2019-2021)</p>
                  <p className="mt-2"><strong className="text-foreground">Bachelor's In Economics</strong></p>
                  <p>DayalBagh Educational Institute (2016-2019)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
