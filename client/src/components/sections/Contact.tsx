import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let’s Build Your Next High-Impact Campaign
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below or <a href="#" className="text-primary underline underline-offset-4 hover:text-primary/80">book directly on my Calendly</a>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border"
        >
          <div className="space-y-6 text-left mb-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <a href="mailto:yashitakulshrestha96@gmail.com" className="text-lg font-bold text-foreground hover:text-primary transition-colors">yashitakulshrestha96@gmail.com</a>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Location</p>
              <p className="text-lg font-bold text-foreground">Noida, India</p>
            </div>
          </div>

          <form className="space-y-6 pt-8 border-t border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="John Doe" className="bg-background/50 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-background/50 h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Brand / Company</label>
              <Input placeholder="Your Brand Name" className="bg-background/50 h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Tell me about your goals and current strategy..." className="min-h-[120px] bg-background/50" />
            </div>
            <Button className="w-full h-14 text-base rounded-xl mt-4">
              Submit Inquiry
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
