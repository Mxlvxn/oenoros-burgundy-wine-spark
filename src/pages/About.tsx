import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cream-dark/40 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <AnimatedText>
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                À propos
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-8">
                Nés au cœur de la{" "}
                <span className="italic text-primary">Bourgogne</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
                Oenoros, c'est une agence de communication qui vit et respire le vin. 
                On conjugue une vraie connaissance du monde viticole avec des stratégies 
                de communication modernes et efficaces.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Citation forte */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-wine-light/10 blur-3xl" />
        <div className="container mx-auto px-6 relative">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="font-display text-2xl md:text-3xl text-primary-foreground italic leading-relaxed">
                "Créons de la valeur autour de votre nom."
              </p>
              <div className="w-12 h-px bg-gold/50 mt-8" />
              <p className="font-body text-xs text-primary-foreground/60 mt-4 tracking-[0.2em] uppercase">
                Notre raison d'être
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story + Values */}
      <section className="py-28 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <AnimatedSection>
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 line-accent">
                  Notre histoire
                </h2>
                <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-[15px]">
                  <p>
                    Oenoros est née au cœur des terroirs légendaires de Bourgogne, portée 
                    par la passion du vin et la conviction qu'une bonne communication peut 
                    changer le destin d'un domaine.
                  </p>
                  <p>
                    On sait que chaque bouteille raconte une histoire forgée par des 
                    générations de savoir-faire. Notre rôle ? Faire en sorte que le monde 
                    l'entende — avec les mots justes, les images qui font mouche, 
                    et une stratégie solide.
                  </p>
                  <p>
                    De la stratégie de marque à la production visuelle, du digital 
                    à l'événementiel — on couvre tout, pour que votre communication 
                    soit à la hauteur de votre excellence.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Nos valeurs */}
            <div>
              <AnimatedSection>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 line-accent">
                  Nos valeurs
                </h2>
              </AnimatedSection>
              <div className="space-y-0">
                {[
                  { 
                    title: "Excellence", 
                    desc: "On vise la perfection dans chaque détail — comme un grand vigneron qui ne lâche rien dans son chai." 
                  },
                  { 
                    title: "Authenticité", 
                    desc: "Les meilleures marques sont celles qui restent vraies. On ne construira jamais quelque chose qui sonne faux." 
                  },
                  { 
                    title: "Innovation", 
                    desc: "Tradition viticole et stratégies contemporaines ne s'opposent pas. On les marie avec soin." 
                  },
                  { 
                    title: "Proximité", 
                    desc: "Basés en Bourgogne, on travaille avec vous — pas juste pour vous. Des relations durables, pas des contrats." 
                  },
                ].map((value, index) => (
                  <AnimatedSection key={value.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.3 }}
                      className="py-7 border-b border-border last:border-0 group cursor-default"
                    >
                      <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-cream border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "15+", label: "Années d'expertise" },
              { value: "50+", label: "Domaines accompagnés" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "∞", label: "Passion pour le vin" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="group">
                  <span className="font-display text-5xl md:text-6xl text-primary group-hover:text-wine-light transition-colors duration-500">{stat.value}</span>
                  <p className="font-body text-xs text-muted-foreground mt-4 uppercase tracking-[0.15em]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe / approche humaine */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Comment on fonctionne
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                  Une équipe <span className="italic text-primary">engagée</span>,<br />pas un prestataire
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  On ne se contente pas de livrer des fichiers. On s'implique vraiment dans 
                  votre succès — on apprend à connaître votre domaine, votre terroir, 
                  votre vision.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Basés à Dijon, au cœur de la Bourgogne, on est à distance raisonnable 
                  de la plupart des grands domaines français — et on n'hésite pas à 
                  se déplacer quand c'est nécessaire.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Réactivité", desc: "Réponse sous 24h, toujours." },
                  { label: "Transparence", desc: "Pas de surprise sur les budgets ou les délais." },
                  { label: "Expertise", desc: "Une connaissance réelle du monde du vin." },
                  { label: "Résultats", desc: "Des actions mesurées, des résultats concrets." },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="border border-border rounded-2xl p-6 cursor-default group hover:border-gold/30 hover:shadow-md hover:shadow-gold/5 transition-all duration-300"
                  >
                    <h4 className="font-display text-base text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.label}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 bg-cream border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-6">
              Travaillons ensemble
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              On serait ravis de vous rencontrer
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-lg mx-auto mb-12 leading-relaxed">
              Partagez-nous votre projet — même si vous ne savez pas encore exactement 
              par où commencer. On est là pour ça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-10 gap-2 group">
                  Nous contacter 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="rounded-full px-10 border-border hover:border-primary hover:text-primary">
                  Voir nos services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
