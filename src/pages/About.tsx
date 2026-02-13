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
                Née au cœur de la{" "}
                <span className="italic text-primary">Bourgogne</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
                Oenoros est une agence de communication spécialisée dans l'univers 
                du vin. Nous conjuguons une connaissance approfondie du monde viticole 
                avec les stratégies de communication les plus innovantes.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Story */}
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
                    Née au sein des terroirs légendaires de Bourgogne, Oenoros incarne 
                    la passion et l'expertise du monde viticole. Notre équipe conjugue 
                    une connaissance approfondie de l'univers du vin avec les stratégies 
                    de communication les plus innovantes.
                  </p>
                  <p>
                    Nous comprenons que chaque domaine raconte une histoire unique, 
                    forgée par des générations de savoir-faire. Notre mission est de 
                    révéler cette singularité au monde, en créant des expériences 
                    de marque aussi mémorables que vos grands crus.
                  </p>
                  <p>
                    De la stratégie de marque à la production visuelle, en passant par 
                    le digital et l'événementiel, nous offrons un accompagnement complet 
                    pour que votre communication soit à la hauteur de votre excellence.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Values */}
            <div>
              <AnimatedSection>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 line-accent">
                  Nos valeurs
                </h2>
              </AnimatedSection>
              <div className="space-y-0">
                {[
                  { title: "Excellence", desc: "Nous visons la perfection dans chaque détail, comme un grand vigneron dans son chai." },
                  { title: "Authenticité", desc: "Nous croyons en la force des histoires vraies et des marques sincères." },
                  { title: "Innovation", desc: "Nous marions tradition viticole et stratégies contemporaines." },
                  { title: "Proximité", desc: "Basés en Bourgogne, nous construisons des relations durables avec nos clients." },
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
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "15+", label: "Années d'expertise" },
              { value: "50+", label: "Domaines accompagnés" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "∞", label: "Passion pour le vin" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div>
                  <span className="font-display text-4xl md:text-5xl text-primary">{stat.value}</span>
                  <p className="font-body text-xs text-muted-foreground mt-3 uppercase tracking-wide">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-6">
              Collaborons ensemble
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Envie de collaborer ?
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-lg mx-auto mb-12">
              Nous serions ravis de découvrir votre domaine et d'imaginer 
              ensemble votre stratégie de communication.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-10 gap-2 group">
                Nous contacter 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
