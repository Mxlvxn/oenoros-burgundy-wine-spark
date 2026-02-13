import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Globe, Camera, TrendingUp, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Identité de Marque",
    description: "Création d'identités visuelles uniques qui capturent l'essence et le terroir de votre domaine. Logo, charte graphique, packaging et étiquettes.",
  },
  {
    icon: Globe,
    title: "Stratégie Digitale",
    description: "Présence web optimisée, réseaux sociaux et marketing digital pour conquérir de nouveaux marchés et fidéliser votre communauté.",
  },
  {
    icon: Camera,
    title: "Production Visuelle",
    description: "Photographie, vidéographie et direction artistique pour sublimer vos cuvées et raconter visuellement votre histoire.",
  },
  {
    icon: TrendingUp,
    title: "Développement Commercial",
    description: "Stratégies de croissance et positionnement premium pour valoriser votre excellence sur les marchés nationaux et internationaux.",
  },
  {
    icon: Sparkles,
    title: "Événementiel",
    description: "Conception et organisation d'événements exclusifs pour vos lancements, dégustations et rencontres privilégiées.",
  },
  {
    icon: Users,
    title: "Relations Presse",
    description: "Mise en relation avec les influenceurs et médias spécialisés du monde viticole pour amplifier votre visibilité.",
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedText>
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                Nos services
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-8">
                Des solutions <span className="italic text-primary">sur mesure</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
                Une approche holistique pour révéler le caractère unique de votre 
                maison. Chaque prestation est pensée et adaptée à vos objectifs.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ backgroundColor: "hsl(40 20% 97%)" }}
                  className="group bg-background p-10 md:p-12 transition-all duration-500 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-700" />
                  <service.icon className="w-5 h-5 text-gold mb-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mb-20">
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                Notre approche
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Un processus <span className="italic text-primary">éprouvé</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {[
              { step: "01", title: "Découverte", desc: "Immersion dans votre univers, vos valeurs et vos ambitions." },
              { step: "02", title: "Stratégie", desc: "Élaboration d'un plan de communication sur mesure." },
              { step: "03", title: "Création", desc: "Conception et production de contenus premium." },
              { step: "04", title: "Déploiement", desc: "Mise en œuvre et suivi des performances." },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.12}>
                <div className="group">
                  <span className="font-display text-4xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500">{item.step}</span>
                  <div className="w-8 h-px bg-border mt-4 mb-4 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />
                  <h3 className="font-display text-xl text-foreground mt-2 mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold/60 mb-6">
              Passons à l'action
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
              Prêt à démarrer ?
            </h2>
            <p className="font-body text-primary-foreground/60 text-base max-w-lg mx-auto mb-12">
              Parlons de votre projet et trouvons la stratégie qui fera 
              rayonner votre maison.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-10 gap-2 border-gold/40 text-gold hover:bg-gold hover:text-wine-dark group">
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

export default Services;
