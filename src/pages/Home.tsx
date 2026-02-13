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
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-dark/50 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-[11px] text-gold tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-gold" />
              Agence de communication viticole
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.05] mb-8"
            >
              Nous révélons<br />
              l'<span className="italic text-primary">identité</span> de<br />
              vos vins
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-14"
            >
              Stratégie, branding et digital — nous accompagnons les domaines 
              viticoles, maisons de vins et négociants vers une communication 
              d'excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/services">
                <Button size="lg" className="rounded-full px-8 gap-2 group">
                  Découvrir nos services
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-border hover:border-primary hover:text-primary">
                  Nous contacter
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee / Clients */}
      <section className="py-16 border-t border-border overflow-hidden">
        <AnimatedText>
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-10">
            Ils nous font confiance
          </p>
        </AnimatedText>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-20 mx-10">
                {["Domaine Leflaive", "Maison Drouhin", "Château de Pommard", "Domaine Romanée", "Bouchard Père", "Clos de Vougeot", "Hospices de Beaune"].map(
                  (name) => (
                    <span key={`${name}-${i}`} className="font-display text-xl text-foreground/20 whitespace-nowrap">
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
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                Ce que nous faisons
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Une expertise<br />
                <span className="italic text-primary">sur mesure</span>
              </h2>
            </AnimatedSection>

            <div className="space-y-0">
              {[
                { num: "01", title: "Identité de Marque", desc: "Création d'identités visuelles qui capturent l'essence de votre terroir." },
                { num: "02", title: "Stratégie Digitale", desc: "Présence web, réseaux sociaux et marketing digital pour conquérir de nouveaux marchés." },
                { num: "03", title: "Production Visuelle", desc: "Photographie, vidéographie et direction artistique pour sublimer vos cuvées." },
                { num: "04", title: "Développement Commercial", desc: "Stratégies de croissance et positionnement premium." },
              ].map((service, index) => (
                <AnimatedSection key={service.num} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="group flex gap-6 py-8 border-b border-border cursor-pointer"
                  >
                    <span className="font-body text-[11px] text-gold/60 mt-1.5">{service.num}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary mt-1.5 transition-all duration-300 group-hover:rotate-45" />
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

      {/* Stats */}
      <section className="py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "15+", label: "Années d'expertise" },
              { value: "50+", label: "Domaines accompagnés" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "360°", label: "Approche globale" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div>
                  <span className="font-display text-4xl md:text-5xl text-gold">{stat.value}</span>
                  <p className="font-body text-xs text-primary-foreground/30 mt-3 tracking-wide uppercase">{stat.label}</p>
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
              Prêt à commencer ?
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Prêt à sublimer<br />votre <span className="italic text-primary">image</span> ?
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-md mx-auto mb-12">
              Discutons de votre projet et trouvons ensemble la stratégie 
              qui fera rayonner votre maison.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-10 gap-2 group">
                Démarrer un projet 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
