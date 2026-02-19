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
    detail: "Naming, identité visuelle, système de marque complet",
  },
  {
    icon: Globe,
    title: "Stratégie Digitale",
    description: "Site web, SEO, réseaux sociaux et marketing digital. Une présence en ligne qui travaille pour vous, même quand vous ne le faites pas.",
    tag: "Digital",
    detail: "Web design, SEO, social media, e-commerce",
  },
  {
    icon: Camera,
    title: "Production Visuelle",
    description: "Photo, vidéo, direction artistique. Parce que vos cuvées méritent d'être montrées à leur juste valeur.",
    tag: "Contenu",
    detail: "Shooting produit, reportage, motion design",
  },
  {
    icon: TrendingUp,
    title: "Développement Commercial",
    description: "Export, positionnement, nouvelles cibles. On vous aide à grandir intelligemment, sans perdre ce qui vous rend unique.",
    tag: "Croissance",
    detail: "Stratégie export, segmentation, pricing",
  },
  {
    icon: Sparkles,
    title: "Événementiel",
    description: "Dégustations, lancements, expériences sur mesure. Des moments mémorables qui prolongent votre univers de marque.",
    tag: "Expérience",
    detail: "Conception, logistique, scénographie",
  },
  {
    icon: Users,
    title: "Relations Presse & Influence",
    description: "Journalistes, influenceurs, médias spécialisés. On ouvre les bonnes portes pour amplifier votre rayonnement.",
    tag: "Relations",
    detail: "RP, partenariats, placements médias",
  },
];

const Services = () => {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream-dark/50 to-transparent pointer-events-none" />
        <div className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent hidden lg:block" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <AnimatedText>
              <p className="font-body text-[11px] uppercase tracking-[0.35em] text-gold mb-8 flex items-center gap-3">
                <span className="w-10 h-px bg-gold" />
                Nos services
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-6xl md:text-8xl text-foreground leading-[1.0] mb-10">
                Des solutions<br />
                <span className="italic text-primary">taillées</span> pour vous
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

      {/* ─── GRILLE SERVICES ─── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ backgroundColor: "hsl(40 20% 97%)" }}
                  className="group bg-background p-10 md:p-12 transition-all duration-500 cursor-pointer relative overflow-hidden min-h-[320px] flex flex-col"
                >
                  {/* Barre dorée top */}
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-700" />
                  
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300 border border-border group-hover:border-gold/20">
                      <service.icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-gold/60 transition-colors duration-300 mt-1">
                      {service.tag}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="font-body text-[11px] text-muted-foreground/40 group-hover:text-gold/60 transition-colors duration-300">
                      {service.detail}
                    </span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground/20 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 shrink-0" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POURQUOI OENOROS ─── */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/60 to-wine-light/10 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-wine-light/10 blur-3xl" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold/70 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold/50" />
                Pourquoi Oenoros
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-8 leading-tight">
                Une agence qui<br />
                <span className="italic text-gold">comprend le vin</span>
              </h2>
              <p className="font-body text-primary-foreground/70 text-sm leading-relaxed max-w-md">
                On n'est pas une agence généraliste qui s'est mise au vin. On est nés 
                dedans. Cette connaissance terrain, c'est ce qui change tout dans la 
                qualité de ce qu'on produit pour vous.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-0">
                {[
                  { label: "Expertise sectorielle", desc: "On connaît vos appellations, votre marché, vos acheteurs." },
                  { label: "Vision globale", desc: "Stratégie, création, digital — tout sous un même toit." },
                  { label: "Résultats mesurables", desc: "On ne fait pas que créer : on mesure, on ajuste, on optimise." },
                  { label: "Partenariat durable", desc: "Pas un contrat ponctuel. Une relation construite dans la durée." },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="py-6 border-b border-primary-foreground/10 last:border-0 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <h4 className="font-display text-lg text-primary-foreground mb-1">{item.label}</h4>
                        <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
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
              Passons à l'action
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[1.0]">
              Prêt à faire<br />
              <span className="italic text-primary">rayonner</span> votre maison ?
            </h2>
            <p className="font-body text-muted-foreground text-base max-w-lg mx-auto mb-14 leading-relaxed">
              Parlons de votre projet et trouvons la stratégie qui vous correspond — 
              sans détour, sans jargon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-12 gap-2 group h-14 text-base">
                  Démarrer un projet
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://tally.so" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="rounded-full px-12 border-border hover:border-primary hover:text-primary h-14 text-base">
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
