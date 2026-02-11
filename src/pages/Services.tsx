import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Globe, Camera, TrendingUp, Sparkles, Users } from "lucide-react";

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
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Nos services
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-8">
              Des solutions <span className="text-primary">sur mesure</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Une approche holistique pour révéler le caractère unique de votre 
              maison. Chaque prestation est pensée et adaptée à vos objectifs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-background p-10 md:p-12 hover:bg-secondary/50 transition-colors duration-300"
              >
                <service.icon className="w-6 h-6 text-primary mb-6" />
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Notre approche
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Un processus <span className="text-primary">éprouvé</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Découverte", desc: "Immersion dans votre univers, vos valeurs et vos ambitions." },
              { step: "02", title: "Stratégie", desc: "Élaboration d'un plan de communication sur mesure." },
              { step: "03", title: "Création", desc: "Conception et production de contenus premium." },
              { step: "04", title: "Déploiement", desc: "Mise en œuvre et suivi des performances." },
            ].map((item) => (
              <div key={item.step}>
                <span className="font-body text-xs text-primary font-medium">{item.step}</span>
                <h3 className="font-display text-xl text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Prêt à démarrer ?
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg max-w-lg mx-auto mb-10">
            Parlons de votre projet et trouvons la stratégie qui fera 
            rayonner votre maison.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="rounded-full px-10 gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Démarrer un projet <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
