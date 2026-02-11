import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-6 animate-fade-up opacity-0">
              Agence de communication viticole
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] mb-8 animate-fade-up opacity-0 [animation-delay:150ms]">
              Nous révélons<br />
              <span className="text-primary">l'identité</span> de<br />
              vos vins
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 animate-fade-up opacity-0 [animation-delay:300ms]">
              Stratégie, branding et digital — nous accompagnons les domaines 
              viticoles, maisons de vins et négociants vers une communication 
              d'excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 [animation-delay:450ms]">
              <Link to="/services">
                <Button size="lg" className="rounded-full px-8 gap-2">
                  Découvrir nos services
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee / Clients */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-widest text-muted-foreground text-center mb-12">
            Ils nous font confiance
          </p>
          <div className="flex items-center justify-center gap-16 flex-wrap opacity-40">
            {["Domaine Leflaive", "Maison Drouhin", "Château de Pommard", "Domaine Romanée", "Bouchard Père"].map(
              (name) => (
                <span key={name} className="font-display text-lg text-foreground whitespace-nowrap">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Ce que nous faisons
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                Une expertise<br />
                <span className="text-primary">sur mesure</span>
              </h2>
            </div>
            <div className="space-y-8">
              {[
                { num: "01", title: "Identité de Marque", desc: "Création d'identités visuelles qui capturent l'essence de votre terroir." },
                { num: "02", title: "Stratégie Digitale", desc: "Présence web, réseaux sociaux et marketing digital pour conquérir de nouveaux marchés." },
                { num: "03", title: "Production Visuelle", desc: "Photographie, vidéographie et direction artistique pour sublimer vos cuvées." },
                { num: "04", title: "Développement Commercial", desc: "Stratégies de croissance et positionnement premium." },
              ].map((service) => (
                <div key={service.num} className="group flex gap-6 pb-8 border-b border-border last:border-0">
                  <span className="font-body text-xs text-muted-foreground mt-1">{service.num}</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
              <Link to="/services" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline">
                Voir tous nos services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "15+", label: "Années d'expertise" },
              { value: "50+", label: "Domaines accompagnés" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "360°", label: "Approche globale" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-4xl md:text-5xl">{stat.value}</span>
                <p className="font-body text-sm text-primary-foreground/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Prêt à sublimer<br />votre <span className="text-primary">image</span> ?
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto mb-10">
            Discutons de votre projet et trouvons ensemble la stratégie 
            qui fera rayonner votre maison.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-10 gap-2">
              Démarrer un projet <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
