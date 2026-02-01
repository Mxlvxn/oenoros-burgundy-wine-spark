import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "À Propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-wine/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center">
          <span className="font-display text-2xl md:text-3xl font-semibold text-gold-gradient tracking-[0.1em]">
            OENOROS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm uppercase tracking-[0.15em] text-cream/80 hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <Button variant="elegant" size="sm">
            Parlons de votre projet
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-wine/98 backdrop-blur-md border-t border-gold/20 animate-fade-in">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-sm uppercase tracking-[0.15em] text-cream/80 hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="default" className="mt-4">
              Parlons de votre projet
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
