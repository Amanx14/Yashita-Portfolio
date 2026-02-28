import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="font-heading font-bold text-xl tracking-tight text-foreground cursor-pointer">
            Yashita <span className="text-primary">Kulshrestha.</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#case-studies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
        </div>
      </div>
    </nav>
  );
}
