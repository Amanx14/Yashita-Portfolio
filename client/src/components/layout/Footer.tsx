export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center md:text-left md:flex justify-between items-center">
        <div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">
            Influencer<span className="text-primary">Consult.</span>
          </span>
          <p className="text-muted-foreground text-sm mt-2">
            Driving real growth through authentic creator partnerships.
          </p>
        </div>
        
        <div className="mt-6 md:mt-0 flex space-x-6 justify-center">
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">Instagram</a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 text-center border-t border-border pt-6">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} InfluencerConsult. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
