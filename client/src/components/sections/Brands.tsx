import { Dribbble, Figma, Framer, Github, Twitch, Twitter } from "lucide-react";

export default function Brands() {
  const brands = [
    { icon: Figma, name: "Figma" },
    { icon: Framer, name: "Framer" },
    { icon: Github, name: "Github" },
    { icon: Twitter, name: "Twitter" },
    { icon: Dribbble, name: "Dribbble" },
    { icon: Twitch, name: "Twitch" },
  ];

  return (
    <section className="py-12 border-y border-border/50 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Partnered with forward-thinking brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((Brand, index) => (
            <div key={index} className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors cursor-pointer">
              <Brand.icon size={28} />
              <span className="font-heading font-semibold text-lg">{Brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
