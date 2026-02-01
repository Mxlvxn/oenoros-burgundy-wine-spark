import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 md:py-32 bg-wine-gradient text-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold/50" />
              <span className="text-gold text-sm uppercase tracking-[0.3em] font-body">
                Notre histoire
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-8">
              Au cœur de la{" "}
              <span className="text-gold-gradient">Bourgogne</span>
            </h2>

            <div className="space-y-6 font-body text-cream/80 leading-relaxed">
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
            </div>

            <div className="mt-10">
              <Button variant="hero" size="xl">
                Découvrir notre équipe
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 border border-gold/30 rounded-sm">
              <span className="font-display text-5xl md:text-6xl text-gold-gradient">15+</span>
              <p className="font-body text-cream/70 text-sm uppercase tracking-widest mt-4">
                Années d'expertise
              </p>
            </div>
            <div className="text-center p-8 border border-gold/30 rounded-sm">
              <span className="font-display text-5xl md:text-6xl text-gold-gradient">50+</span>
              <p className="font-body text-cream/70 text-sm uppercase tracking-widest mt-4">
                Domaines accompagnés
              </p>
            </div>
            <div className="text-center p-8 border border-gold/30 rounded-sm">
              <span className="font-display text-5xl md:text-6xl text-gold-gradient">100%</span>
              <p className="font-body text-cream/70 text-sm uppercase tracking-widest mt-4">
                Clients satisfaits
              </p>
            </div>
            <div className="text-center p-8 border border-gold/30 rounded-sm">
              <span className="font-display text-5xl md:text-6xl text-gold-gradient">∞</span>
              <p className="font-body text-cream/70 text-sm uppercase tracking-widest mt-4">
                Passion pour le vin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
