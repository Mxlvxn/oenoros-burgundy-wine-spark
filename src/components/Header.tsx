import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo-oenoros.png";

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
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-6xl bg-primary rounded-full px-8 md:px-10 transition-all duration-500 ${
          isScrolled ? "py-2.5 shadow-2xl shadow-wine-dark/30" : "py-3.5"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Oenoros" 
              className="h-8 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-body text-[13px] tracking-wider uppercase transition-all duration-300 relative ${
                  isActive(item.href)
                    ? "text-gold"
                    : "text-primary-foreground/50 hover:text-gold-light"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:block">
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full px-6 bg-gold/90 text-wine-dark border-0 hover:bg-gold font-body text-xs uppercase tracking-wider font-medium"
              >
                Votre projet
              </Button>
            </Link>

            <button
              className="md:hidden text-primary-foreground/70 hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-6 right-6 mt-2 bg-primary rounded-3xl p-8 md:hidden max-w-6xl mx-auto shadow-2xl shadow-wine-dark/40"
          >
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-body text-sm tracking-wider uppercase transition-colors ${
                    isActive(item.href)
                      ? "text-gold"
                      : "text-primary-foreground/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-3">
                <Button
                  variant="secondary"
                  size="default"
                  className="rounded-full w-full bg-gold/90 text-wine-dark border-0 hover:bg-gold font-body text-xs uppercase tracking-wider font-medium"
                >
                  Parlons de votre projet
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
