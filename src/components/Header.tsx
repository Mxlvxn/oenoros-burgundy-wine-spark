import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-display text-2xl font-semibold text-primary tracking-[0.08em]">
            OENOROS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:block">
          <Button variant="default" size="sm" className="rounded-full px-6">
            Parlons de votre projet
          </Button>
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body text-sm tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="default" size="default" className="rounded-full w-full mt-2">
                Parlons de votre projet
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
