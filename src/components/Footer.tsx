const Footer = () => {
  return (
    <footer className="bg-wine-dark py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-display text-2xl font-semibold text-gold-gradient tracking-[0.1em]">
              OENOROS
            </span>
            <p className="font-body text-cream/60 text-sm mt-2">
              L'excellence du marketing viticole
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#accueil"
              className="font-body text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors duration-300"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="font-body text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#apropos"
              className="font-body text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors duration-300"
            >
              À Propos
            </a>
            <a
              href="#contact"
              className="font-body text-xs uppercase tracking-widest text-cream/60 hover:text-gold transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gold/20" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-body text-cream/40 text-xs tracking-widest">
            © 2025 OENOROS. Tous droits réservés. Basée en Bourgogne avec passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
