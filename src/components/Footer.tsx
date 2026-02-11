import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/">
              <span className="font-display text-xl font-semibold text-primary tracking-[0.08em]">
                OENOROS
              </span>
            </Link>
            <p className="font-body text-muted-foreground text-sm mt-4 max-w-sm leading-relaxed">
              Agence de communication spécialisée dans l'univers du vin. 
              Basée en Bourgogne, nous accompagnons les acteurs viticoles 
              vers l'excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "À Propos", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-body text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm text-foreground/70">
              <span>contact@oenoros.fr</span>
              <span>Bourgogne, France</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-muted-foreground text-xs">
            © {new Date().getFullYear()} Oenoros. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
