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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6">
      <div
        className={`w-full max-w-6xl bg-primary text-primary-foreground rounded-full px-8 md:px-10 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-display text-lg md:text-xl font-semibold text-primary-foreground tracking-[0.08em]">
              OENOROS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary-foreground font-medium"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:block">
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full px-6 text-primary bg-primary-foreground hover:bg-primary-foreground/90"
              >
                Parlons de votre projet
              </Button>
            </Link>

            <button
              className="md:hidden text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-2 bg-primary text-primary-foreground rounded-3xl p-6 animate-fade-in md:hidden max-w-6xl mx-auto">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body text-sm tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-primary-foreground font-medium"
                    : "text-primary-foreground/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <Button
                variant="secondary"
                size="default"
                className="rounded-full w-full text-primary bg-primary-foreground hover:bg-primary-foreground/90"
              >
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
