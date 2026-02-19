import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"; 
import logoOenoros from "@/assets/logo-oenoros.png"; 

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/5">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* ─── 1. LOGO ET DESCRIPTION ─── */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-10">
              <img 
                src={logoOenoros} 
                alt="Oenoros Logo" 
                className="h-40 w-auto object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-display text-2xl text-gold tracking-[0.12em]">OENOROS</span>';
                }}
              />
            </Link>
            <p className="font-body text-primary-foreground/60 text-sm max-w-sm leading-relaxed italic">
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
                { label: "À propos", href: "/a-propos" },
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
                  href="
