import { Dribbble, Figma, Framer, Github, Twitch, Twitter } from "lucide-react";

export default function Brands() {
  const brands = [
    {name : "Swiss Beauty"},
    { name: "Ghar Soaps" },
    { name: "STRCH" },
    { name: "Englishoven" },
    { name: "RENEE" },
    { name: "Policybazaar" },
    { name: "Stable Money" },
    { name: "Traya" },
    { name: "INDmoney" },
    
  ];

  return (
    <section className="py-12 border-y border-border/50 bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Partnered with forward-thinking brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-all duration-500">
          {brands.map((Brand, index) => (
            <div key={index} className="flex items-center text-foreground/80 hover:text-foreground transition-colors cursor-pointer text-center">
              <span className="font-heading font-bold text-xl">{Brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
