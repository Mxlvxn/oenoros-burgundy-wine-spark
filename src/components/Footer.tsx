import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react"; // Import des icônes
import logoOenoros from "@/assets/logo-oenoros.png"; // On importe ton logo ici

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/5">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* ─── 1. LOGO ET DESCRIPTION ─── */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-8">
              {/* Remplacement du texte par ton image logo */}
              <img 
                src={logoOenoros} 
                alt="Oenoros Logo" 
                className="h-40 w-auto object-contain" 
                onError={(e) => {
                  // Si l'image ne charge pas, on affiche le texte en secours
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-display text-2xl text-gold tracking-[0.12em]">OENOROS</span>';
                }}
              />
            </Link>
            <p className="font-body text-primary-foreground/60 text-sm max-w-sm leading-relaxed mb-8 italic">
              Agence de communication premium spécialisée dans l'univers du vin. 
              Basés à Dijon, nous accompagnons les acteurs viticoles vers l'excellence.
            </p>
          </div>

          {/* ─── 2. NAVIGATION RAPIDE ─── */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.25em] text-gold mb-8">
              Explorer
            </h4>
            <nav className="flex flex-col gap-5">
              {[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "A propos", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-all duration-300 w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ─── 3. CONTACT & RÉSEAUX SOCIAUX ─── */}
          <div>
            <h4 className="font-body text-[11px] uppercase tracking-[0.25em] text-gold mb-8">
              Nous suivre
            </h4>
            <div className="flex flex-col gap-6">
              {/* Liens Réseaux Sociaux */}
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.instagram.com/agence.oenoros" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-primary-foreground/50 hover:text-gold transition-all group"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/in/melvyn-guepet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-primary-foreground/50 hover:text-gold transition-all group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </div>

              <div className="h-px w-8 bg-gold/20 my-2" />

              <div className="flex flex-col gap-3 font-body text-sm text-primary-foreground/40">
                <a href="mailto:contact@oenoros.fr" className="hover:text-gold transition-colors">
                  contact@oenoros.fr
                </a>
                <span>Dijon, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 4. PIED DE PAGE (Légal) ─── */}
        <div className="mt-24 pt-10 border-t border-primary-foreground/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="font-body text-primary-foreground/30 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Oenoros — Excellence & Communication
          </p>
          <div className="flex gap-10">
            {/* On garde les liens vides pour le moment, ils seront reliés plus tard */}
            <Link to="#" className="font-body text-[10px] uppercase tracking-widest text-primary-foreground/30 hover:text-gold transition-colors">
              Mentions légales
            </Link>
            <Link to="#" className="font-body text-[10px] uppercase tracking-widest text-primary-foreground/30 hover:text-gold transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
