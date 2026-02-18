import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-dark/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-px h-40 bg-gradient-to-t from-gold/0 to-gold/20 ml-12" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-[11px] text-gold tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-gold" />
              Agence de communication viticole — Bourgogne
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[6rem] text-foreground leading-[1.0] mb-10"
            >
              Élevez<br />
              votre <span className="italic text-primary">nom</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-14"
            >
              De la vigne à l'écran, nous sculptons l'identité des terroirs de prestige. 
              L'allié digital des grands noms de la viticulture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8 gap-2 group">
                  Prendre rendez-vous
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-border hover:border-primary hover:text-primary">
                  Découvrir nos services
                </Button>
              </Link>
            </motion.div>

            {/* Questionnaire CTA subtil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-border" />
              <a
                href="https://tally.so"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-muted-foreground/60 hover:text-primary transition-colors duration-300 tracking-wide flex items-center gap-2 group"
              >
                Pas sûr par où commencer ? Répondez à notre questionnaire
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-3"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 [writing-mode:vertical-rl]">
            Défiler
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Marquee double — keywords */}
      <section className="py-12 border-t border-border overflow-hidden bg-cream">
        <div className="relative flex flex-col gap-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 mx-8">
                {["#STRATÉGIE", "#VIN", "#LUXE", "#EXPORT", "#BRANDING", "#BOURGOGNE", "#VIGNOBLES", "#CONSEIL", "#PRESTIGE"].map(
                  (tag) => (
                    <span key={`${tag}-${i}`} className="font-display text-base text-foreground/15 whitespace-nowrap italic">
                      {tag}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 mx-8">
                {["#PHOTO", "#VIDEO", "#SOCIALMEDIA", "#IDENTITY", "#SEO", "#CONTENT", "#DIGITAL", "#PACKAGING", "#ÉVÉNEMENTIEL"].map(
                  (tag) => (
                    <span key={`${tag}-${i}`} className="font-body text-[11px] text-foreground/10 whitespace-nowrap uppercase tracking-widest">
                      {tag}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ils nous font confiance */}
      <section className="py-16 border-b border-border overflow-hidden">
        <AnimatedText>
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-10">
            Ils nous font confiance
          </p>
        </AnimatedText>
        <div className="relative">
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-20 mx-10">
                {["Domaine Leflaive", "Maison Drouhin", "Château de Pommard", "Domaine Romanée", "Bouchard Père & Fils", "Clos de Vougeot", "Hospices de Beaune"].map(
                  (name) => (
                    <span key={`${name}-${i}`} className="font-display text-lg text-foreground/20 whitespace-nowrap hover:text-foreground/40 transition-colors duration-500 cursor-default">
                      {name}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Ce que nous faisons
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
                  Une expertise<br />
                  <span className="italic text-primary">sur mesure</span>
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Chaque domaine a une histoire unique. On est là pour la raconter 
                  de la meilleure façon possible — avec précision, cohérence et du style.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-0">
              {[
                { num: "01", title: "Identité de Marque", desc: "Logo, charte graphique, packaging — tout ce qui fait qu'on vous reconnaît au premier coup d'œil." },
                { num: "02", title: "Stratégie Digitale", desc: "Site web, réseaux sociaux, SEO — une présence en ligne qui travaille pour vous, 24h/24." },
                { num: "03", title: "Production Visuelle", desc: "Photo, vidéo, direction artistique — vos cuvées méritent d'être sublimées." },
                { num: "04", title: "Développement Commercial", desc: "Export, positionnement, nouvelles cibles — on vous aide à grandir sans perdre votre âme." },
              ].map((service, index) => (
                <AnimatedSection key={service.num} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="group flex gap-6 py-8 border-b border-border cursor-pointer"
                  >
                    <span className="font-body text-[11px] text-gold/50 mt-1.5 shrink-0">{service.num}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary mt-1.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </motion.div>
                </AnimatedSection>
              ))}
              <AnimatedSection delay={0.4}>
                <Link to="/services" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-wine-light transition-colors mt-8 group">
                  Voir tous nos services 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — fond bordeaux */}
      <section className="py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/60 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-wine-light/10 blur-3xl" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "15+", label: "Années d'expertise" },
              { value: "50+", label: "Domaines accompagnés" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "360°", label: "Approche globale" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="group">
                  <span className="font-display text-5xl md:text-6xl text-gold group-hover:text-gold-light transition-colors duration-500">{stat.value}</span>
                  <p className="font-body text-xs text-primary-foreground/70 mt-4 tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comment on travaille */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mb-20">
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                Notre approche
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                De l'idée au <span className="italic text-primary">déploiement</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { step: "01", title: "Audit", desc: "On analyse votre ADN, vos forces et ce qui vous rend différent." },
              { step: "02", title: "Plan", desc: "Co-construction d'une stratégie taillée pour vos ambitions." },
              { step: "03", title: "Création", desc: "Production de tous vos contenus et supports avec soin et précision." },
              { step: "04", title: "Activation", desc: "Lancement des campagnes et suivi rigoureux des résultats." },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.12}>
                <div className="group">
                  <span className="font-display text-5xl text-gold/15 group-hover:text-gold/35 transition-colors duration-500">{item.step}</span>
                  <div className="w-8 h-px bg-border mt-5 mb-5 group-hover:w-14 group-hover:bg-gold transition-all duration-500" />
                  <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Questionnaire / CTA intermédiaire */}
      <section className="py-20 border-t border-border bg-cream">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-3 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Pas sûr par où commencer ?
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground">
                  Faites le point en <span className="italic text-primary">3 minutes</span>
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
                  Notre questionnaire vous aide à identifier vos besoins réels et à préparer 
                  votre première conversation avec nous.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://tally.so"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group transition-all duration-300">
                    Répondre au questionnaire
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-36">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-6">
              Prêt à vous lancer ?
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Votre image mérite<br />mieux que <span className="italic text-primary">l'ordinaire</span>
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-md mx-auto mb-12 leading-relaxed">
              Discutons de votre domaine et construisons ensemble 
              quelque chose dont vous serez fiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-10 gap-2 group">
                  Démarrer un projet 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/a-propos">
                <Button variant="outline" size="lg" className="rounded-full px-10 border-border hover:border-primary hover:text-primary">
                  En savoir plus sur nous
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
