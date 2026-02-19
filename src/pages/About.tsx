import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const About = () => {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-dark/50 to-transparent pointer-events-none" />
        {/* Ligne décorative verticale */}
        <div className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden lg:block" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <AnimatedText>
              <p className="font-body text-[11px] uppercase tracking-[0.35em] text-gold mb-8 flex items-center gap-3">
                <span className="w-10 h-px bg-gold" />
                À propos
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-6xl md:text-8xl text-foreground leading-[1.0] mb-10">
                Nés au cœur<br />
                de la{" "}
                <span className="italic text-primary">Bourgogne</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl">
                Oenoros, c'est une agence de communication qui vit et respire le vin. 
                Nous conjuguons une vraie connaissance du monde viticole avec des stratégies 
                modernes et ambitieuses.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* ─── CITATION FORTE ─── */}
      <section className="relative overflow-hidden">
        <div className="bg-primary py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-wine-dark/60 to-wine-light/20 pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="container mx-auto px-6 relative">
            <AnimatedSection>
              <div className="max-w-4xl">
                <span className="font-display text-8xl text-gold/20 leading-none block mb-4">"</span>
                <p className="font-display text-3xl md:text-4xl text-primary-foreground leading-relaxed -mt-8">
                  Créons de la valeur autour de votre nom.
                </p>
                <div className="flex items-center gap-4 mt-10">
                  <div className="w-10 h-px bg-gold/40" />
                  <p className="font-body text-xs text-primary-foreground/50 tracking-[0.2em] uppercase">
                    Notre raison d'être
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── HISTOIRE + VALEURS ─── */}
      <section className="py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28">
            <AnimatedSection>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Notre histoire
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 leading-tight">
                  Une agence <span className="italic text-primary">enracinée</span>
                </h2>
                <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-[15px]">
                  <p>
                    Oenoros est née au cœur des terroirs légendaires de Bourgogne, portée 
                    par la passion du vin et la conviction qu'une bonne communication peut 
                    changer le destin d'un domaine.
                  </p>
                  <p>
                    Nous savons que chaque bouteille raconte une histoire forgée par des 
                    générations de savoir-faire. Notre rôle est de faire en sorte que le monde 
                    l'entende — avec les mots justes, les images qui font mouche, 
                    et une stratégie solide.
                  </p>
                  <p>
                    De la stratégie de marque à la production visuelle, du digital 
                    à l'événementiel — nous couvrons tout, pour que votre communication 
                    soit à la hauteur de votre excellence.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Valeurs */}
            <div>
              <AnimatedSection>
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Nos valeurs
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 leading-tight">
                  Ce qui nous <span className="italic text-primary">anime</span>
                </h2>
              </AnimatedSection>
              <div className="space-y-0">
                {[
                  { 
                    num: "01",
                    title: "Excellence", 
                    desc: "Nous visons la perfection dans chaque détail — comme un grand vigneron qui ne lâche rien dans son chai." 
                  },
                  { 
                    num: "02",
                    title: "Authenticité", 
                    desc: "Les meilleures marques sont celles qui restent vraies. Nous ne construirons jamais quelque chose qui sonne faux." 
                  },
                  { 
                    num: "03",
                    title: "Innovation", 
                    desc: "Tradition viticole et stratégies contemporaines ne s'opposent pas. Nous les marions avec soin." 
                  },
                  { 
                    num: "04",
                    title: "Proximité", 
                    desc: "Basés en Bourgogne, nous travaillons avec vous — pas juste pour vous. Des relations durables, pas des contrats." 
                  },
                ].map((value, index) => (
                  <AnimatedSection key={value.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="py-7 border-b border-border last:border-0 group cursor-default flex gap-6"
                    >
                      <span className="font-body text-[11px] text-gold/40 mt-1 shrink-0 group-hover:text-gold transition-colors duration-300">{value.num}</span>
                      <div>
                        <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMENT NOUS FONCTIONNONS ─── */}
      <section className="py-32 bg-cream border-y border-border relative overflow-hidden">
        <div className="absolute -right-20 top-20 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <div className="lg:sticky lg:top-32">
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold" />
                  Notre mode de fonctionnement
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                  Une équipe <span className="italic text-primary">engagée</span>,<br />pas un prestataire
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  Nous ne nous contentons pas de livrer des fichiers. Nous nous impliquons vraiment dans 
                  votre succès — nous apprenons à connaître votre domaine, votre terroir, 
                  votre vision.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Basés à Dijon, au cœur de la Bourgogne, nous sommes à distance raisonnable 
                  de la plupart des grands domaines français — et nous n'hésitons pas à nous déplacer.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Réactivité", desc: "Réponse sous 24h, toujours.", icon: "⚡" },
                  { label: "Transparence", desc: "Pas de surprise sur les budgets ou les délais.", icon: "◎" },
                  { label: "Expertise", desc: "Une connaissance réelle du monde du vin.", icon: "◈" },
                  { label: "Résultats", desc: "Des actions mesurées, des résultats concrets.", icon: "↗" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                    className="border border-border bg-background rounded-2xl p-7 cursor-default group hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-400"
                  >
                    <span className="text-xl mb-4 block text-gold/60 group-hover:text-gold transition-colors duration-300">{item.icon}</span>
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

      {/* ─── CTA ─── */}
      <section className="py-36 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.35em] text-gold mb-8">
              Travaillons ensemble
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[1.0]">
              Nous serions ravis<br />
              de vous <span className="italic text-primary">rencontrer</span>
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-lg mx-auto mb-14 leading-relaxed">
              Partagez-nous votre projet — même si vous ne savez pas encore 
              exactement par où commencer. C'est justement pour ça que nous sommes là.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-12 gap-2 group h-14 text-base">
                  Nous contacter
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="rounded-full px-12 border-border hover:border-primary hover:text-primary h-14 text-base">
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
