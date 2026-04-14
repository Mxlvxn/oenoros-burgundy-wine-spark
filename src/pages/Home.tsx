import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-wine-bottle.jpg";

// ─────────────────────────────────────────────────────────────────────────────
// CLIENTS — Pour ajouter un partenaire, insère simplement son nom ici.
// La section est statique si tout tient sur une ligne,
// et passe automatiquement en marquee défilant dès que ça déborde.
// ─────────────────────────────────────────────────────────────────────────────
const CLIENTS: string[] = [
  "Soyez les premiers !",
];

const ITEM_CLASSNAME =
  "font-display text-xl text-foreground/15 whitespace-nowrap hover:text-foreground/35 transition-colors duration-700 cursor-default tracking-wide uppercase";

const ClientsStrip = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [needsMarquee, setNeedsMarquee] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = trackRef.current;
      if (!el) return;
      setNeedsMarquee(el.scrollWidth > el.parentElement!.clientWidth);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const items = needsMarquee ? [...CLIENTS, ...CLIENTS, ...CLIENTS] : CLIENTS;

  return (
    <section className="py-16 overflow-hidden bg-background">
      <AnimatedText>
        <p className="font-body text-[10px] uppercase tracking-[0.35em] text-muted-foreground/50 text-center mb-10">
          Ils nous font confiance
        </p>
      </AnimatedText>
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className={
            needsMarquee
              ? "flex animate-marquee-slow whitespace-nowrap"
              : "flex justify-center items-center gap-16 px-8"
          }
        >
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className={`${ITEM_CLASSNAME} ${needsMarquee ? "mx-8" : ""}`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ================================================================
          1. SECTION HERO (Haut de page)
          Contient : Image parallaxe, Titre principal et Boutons d'action.
          ================================================================
      */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-end">
        {/* Fond avec effet Parallaxe */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
          <img src={heroImage} alt="Bouteille de vin de Bourgogne" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/95 via-wine-dark/50 to-wine-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/60 to-transparent" />
        </motion.div>

        {/* Textes et Boutons du Hero */}
        <motion.div style={{ y: textY, opacity }} className="relative z-10 container mx-auto px-6 pb-24 pt-40">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-[11px] text-gold tracking-[0.35em] uppercase mb-8 flex items-center gap-3"
          >
            <span className="w-10 h-px bg-gold" />
            Agence de marketing & stratégie viticole — Bourgogne
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl md:text-[9rem] lg:text-[11rem] text-primary-foreground leading-[0.9] mb-10 tracking-tight"
          >
            Élevez<br />
            <span className="italic text-gold">votre</span><br />
            nom
          </motion.h1>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-10 gap-2 group bg-gold text-wine-dark hover:bg-gold-light border-0 font-body font-medium">
                Prendre rendez-vous
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://tally.so/r/obE19M" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-10 gap-2 group h-14 text-base bg-foreground text-background hover:bg-primary hover:text-white transition-all border-none">
                Questionnaire gratuit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Indicateur de Scroll (Côté droit) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }} className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-3 z-10">
          <span className="font-body text-[9px] uppercase tracking-[0.3em] text-primary-foreground/30 [writing-mode:vertical-rl]">Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </section>

      {/* ================================================================
          2. MARQUEE : MOTS-CLÉS (Barre défilante Premium)
          Style : Lettres espacées, opacité légère, défilement fluide.
          ================================================================
      */}
      <section className="py-16 bg-white border-y border-neutral-100 overflow-hidden flex items-center">
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="flex whitespace-nowrap items-center"
          >
            {[
              "Stratégie", "✦", "Branding", "✦", "Bourgogne", "✦", "Viticulture", "✦", "Luxe", "✦", "Export", "✦", "Prestige", "✦", "Digital", "✦",
              "Stratégie", "✦", "Branding", "✦", "Bourgogne", "✦", "Viticulture", "✦", "Luxe", "✦", "Export", "✦", "Prestige", "✦", "Digital", "✦"
            ].map((tag, i) => (
              <span key={i} className={`font-display uppercase tracking-[0.3em] mx-10 ${tag === "✦" ? "text-gold/40 text-sm" : "text-black/20 text-4xl md:text-5xl hover:text-primary transition-colors duration-500 cursor-default"}`}>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          3. SECTION CLIENTS (Logos/Noms)
          — Statique si tout tient sur une ligne,
          — Marquee automatique dès que la liste déborde.
          — Pour ajouter un client : modifier le tableau CLIENTS en haut.
          ================================================================
      */}
      <ClientsStrip />

      {/* ================================================================
          4. SECTION SERVICES (Teaser des expertises)
          ================================================================
      */}
      <section className="py-28 md:py-36 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <div className="lg:sticky lg:top-32">
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Ce que nous faisons
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-8">
                  Une expertise<br />
                  <span className="italic text-primary">sur mesure</span>
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mb-10">
                  Chaque domaine a une histoire unique. Notre rôle est de la raconter avec précision, cohérence et ambition.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-wine-light transition-colors group">
                  Voir tous nos services
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>

            <div className="space-y-0">
              {[
                { num: "01", title: "Identité de Marque", desc: "Logo, charte graphique, packaging — tout ce qui fait qu'on vous reconnaît au premier coup d'œil.", href: "/services" },
                { num: "02", title: "Stratégie Digitale", desc: "Site web, réseaux sociaux, SEO — une présence en ligne qui travaille pour vous, 24h/24.", href: "/services" },
                { num: "03", title: "Production Visuelle", desc: "Photo, vidéo, direction artistique — vos cuvées méritent d'être sublimées.", href: "/services" },
                { num: "04", title: "Développement Commercial", desc: "Export, positionnement, nouvelles cibles — grandir sans perdre son âme.", href: "/services" },
                { num: "05", title: "Événementiel & Relations Presse", desc: "Dégustations, lancements, médias — des moments et une visibilité qui prolongent votre image.", href: "/services" },
              ].map((service, index) => (
                <AnimatedSection key={service.num} delay={index * 0.08}>
                  <Link to={service.href}>
                    <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="group flex gap-6 py-8 border-b border-border cursor-pointer">
                      <span className="font-body text-[11px] text-gold/40 mt-1.5 shrink-0 group-hover:text-gold transition-colors duration-300">{service.num}</span>
                      <div className="flex-1">
                        <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary mt-1.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          5. SECTION CHIFFRES CLÉS (Stats fond bordeaux)
          ================================================================
      */}
      <section className="py-32 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/70 to-wine-light/20 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-wine-light/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="container mx-auto px-6 relative">
          <AnimatedText>
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-gold/60 text-center mb-20">En quelques chiffres</p>
          </AnimatedText>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "1", label: "Années d'expertise" },
              { value: "∞", label: "Passion pour le vin" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "360°", label: "Approche globale" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="group">
                  <motion.span whileInView={{ opacity: [0, 1] }} viewport={{ once: true }} className="font-display text-6xl md:text-7xl text-gold block group-hover:text-gold-light transition-colors duration-500">
                    {stat.value}
                  </motion.span>
                  <div className="w-8 h-px bg-gold/20 mx-auto my-4 group-hover:w-14 group-hover:bg-gold/40 transition-all duration-500" />
                  <p className="font-body text-xs text-primary-foreground/50 uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          6. SECTION QUESTIONNAIRE (Lead Generation)
          ================================================================
      */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden bg-cream p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Envie d'aider ?
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  Faites votre bonne action de <span className="italic text-primary">la journée !</span>
                </h3>
                <p className="font-body text-sm text-muted-foreground max-w-md leading-relaxed">
                  "L'incertitude est souvent le point de départ des plus grandes transformations stratégiques."
                </p>
              </div>
              <div className="relative shrink-0">
                <a href="https://tally.so/r/obE19M" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full px-10 gap-2 group bg-primary text-primary-foreground hover:bg-wine-light border-none">
                    Répondre au questionnaire
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          7. SECTION CTA FINAL (Appel à l'action bas de page)
          ================================================================
      */}
      <section className="py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/30 to-cream/60 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.35em] text-gold mb-8">Prêt à vous lancer ?</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground mb-8 leading-[1.0]">
              Votre image mérite<br />
              <span className="italic text-primary">mieux que l'ordinaire</span>
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-md mx-auto mb-14 leading-relaxed">
              Discutons de votre domaine. Une conversation suffit souvent pour y voir beaucoup plus clair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-12 gap-2 group h-14 text-base bg-primary text-white hover:bg-wine-dark border-none">
                  Démarrer un projet
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/a-propos">
                <Button variant="outline" size="lg" className="rounded-full px-12 border-border hover:border-primary hover:text-primary h-14 text-base">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
