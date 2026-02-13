import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/">
              <span className="font-display text-2xl text-gold tracking-[0.12em]">
                OENOROS
              </span>
            </Link>
            <p className="font-body text-primary-foreground/40 text-sm mt-6 max-w-sm leading-relaxed">
              Agence de communication premium spécialisée dans l'univers du vin. 
              Basée à Dijon, nous accompagnons les acteurs viticoles vers l'excellence.
            </p>
            <div className="w-12 h-px bg-gold/30 mt-6" />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-gold/60 mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "À Propos", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-body text-sm text-primary-foreground/40 hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-gold/60 mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4 font-body text-sm text-primary-foreground/40">
              <a href="mailto:contact@oenoros.fr" className="hover:text-gold transition-colors duration-300">
                contact@oenoros.fr
              </a>
              <span>Dijon, France</span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-primary-foreground/25 text-xs tracking-wide">
            © {new Date().getFullYear()} Oenoros — Tous droits réservés
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-body text-xs text-primary-foreground/25 hover:text-gold/60 transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="font-body text-xs text-primary-foreground/25 hover:text-gold/60 transition-colors duration-300">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
