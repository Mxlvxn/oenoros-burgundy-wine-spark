import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              À propos
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-8">
              Née au cœur de la{" "}
              <span className="text-primary">Bourgogne</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Oenoros est une agence de communication spécialisée dans l'univers 
              du vin. Nous conjuguons une connaissance approfondie du monde viticole 
              avec les stratégies de communication les plus innovantes.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Notre histoire
              </h2>
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
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

            {/* Values */}
            <div className="space-y-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Nos valeurs
              </h2>
              {[
                { title: "Excellence", desc: "Nous visons la perfection dans chaque détail, comme un grand vigneron dans son chai." },
                { title: "Authenticité", desc: "Nous croyons en la force des histoires vraies et des marques sincères." },
                { title: "Innovation", desc: "Nous marions tradition viticole et stratégies contemporaines." },
                { title: "Proximité", desc: "Basés en Bourgogne, nous construisons des relations durables avec nos clients." },
              ].map((value) => (
                <div key={value.title} className="pb-8 border-b border-border last:border-0">
                  <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "15+", label: "Années d'expertise" },
              { value: "50+", label: "Domaines accompagnés" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "∞", label: "Passion pour le vin" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-4xl md:text-5xl text-primary">{stat.value}</span>
                <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Envie de collaborer ?
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto mb-10">
            Nous serions ravis de découvrir votre domaine et d'imaginer 
            ensemble votre stratégie de communication.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-10 gap-2">
              Nous contacter <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
