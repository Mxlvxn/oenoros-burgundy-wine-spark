import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Globe, Camera, TrendingUp, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Identité de Marque",
    description: "Logo, charte graphique, packaging, étiquettes. Tout ce qui fait qu'on vous reconnaît — et qu'on se souvient de vous.",
    tag: "Branding",
  },
  {
    icon: Globe,
    title: "Stratégie Digitale",
    description: "Site web, SEO, réseaux sociaux et marketing digital. Une présence en ligne qui travaille pour vous, même quand vous ne le faites pas.",
    tag: "Digital",
  },
  {
    icon: Camera,
    title: "Production Visuelle",
    description: "Photo, vidéo, direction artistique. Parce que vos cuvées méritent d'être montrées à leur juste valeur.",
    tag: "Contenu",
  },
  {
    icon: TrendingUp,
    title: "Développement Commercial",
    description: "Export, positionnement, nouvelles cibles. On vous aide à grandir intelligemment, sans perdre ce qui vous rend unique.",
    tag: "Croissance",
  },
  {
    icon: Sparkles,
    title: "Événementiel",
    description: "Dégustations, lancements, expériences sur mesure. Des moments mémorables qui prolongent votre univers de marque.",
    tag: "Expérience",
  },
  {
    icon: Users,
    title: "Relations Presse & Influence",
    description: "Journalistes, influenceurs, médias spécialisés. On ouvre les bonnes portes pour amplifier votre rayonnement.",
    tag: "Relations",
  },
];

const Services = () => {
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
                Nos services
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-8">
                Des solutions <span className="italic text-primary">taillées</span><br />pour vous
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl">
                Pas de formules toutes faites. On prend le temps de comprendre 
                votre domaine, vos ambitions et votre marché — puis on construit 
                ce qui vous correspond vraiment.
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
                  className="group bg-background p-10 md:p-12 transition-all duration-500 cursor-pointer relative overflow-hidden min-h-[280px] flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-700" />
                  <div className="flex items-center justify-between mb-8">
                    <service.icon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-gold/60 transition-colors duration-300">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-6 w-6 h-px bg-border group-hover:w-10 group-hover:bg-gold transition-all duration-500" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Oenoros peut vous aider sur... */}
      <section className="py-28 bg-cream border-t border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
                Et au cas où vous l'auriez oublié
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Oenoros peut vous aider sur ces <span className="italic text-primary">points</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Stratégie Digitale",
              "Identité Visuelle",
              "Création de Contenu",
              "Réseaux Sociaux",
              "Et plus encore...",
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group border border-border bg-background rounded-2xl p-6 text-center cursor-default hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
                >
                  <p className="font-display text-base text-foreground group-hover:text-primary transition-colors duration-300">
                    {item}
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
                Comment on travaille
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Un processus <span className="italic text-primary">éprouvé</span>
              </h2>
              <p className="font-body text-sm text-muted-foreground mt-6 max-w-md leading-relaxed">
                Pas de superflu, pas d'improvisation. Chaque projet suit un cadre 
                clair — pour qu'on avance ensemble, avec sérénité.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {[
              { step: "01", title: "Audit", desc: "Analyse de votre ADN, vos points forts et vos besoins réels. On part du vrai, pas des suppositions." },
              { step: "02", title: "Plan", desc: "Co-construction de votre stratégie et de votre feuille de route. Vous validez chaque étape." },
              { step: "03", title: "Création", desc: "Production de vos contenus et supports avec le niveau d'exigence que vous méritez." },
              { step: "04", title: "Activation", desc: "Lancement des campagnes et suivi précis des performances. Pas d'action sans mesure." },
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

      {/* CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/60 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-wine-light/10 blur-3xl" />
        <div className="container mx-auto px-6 text-center relative">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold/70 mb-6">
              Passons à l'action
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
              Prêt à démarrer ?
            </h2>
            <p className="font-body text-primary-foreground/70 text-base max-w-lg mx-auto mb-12 leading-relaxed">
              Parlons de votre projet et trouvons la stratégie qui fera 
              rayonner votre maison — sans détour, sans jargon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-10 gap-2 border-gold/50 text-gold hover:bg-gold hover:text-wine-dark group transition-all duration-300">
                  Démarrer un projet 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://tally.so" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg" className="rounded-full px-10 text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/10">
                  Répondre au questionnaire
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
