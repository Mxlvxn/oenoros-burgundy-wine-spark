import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vineyard.jpg";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vignobles de Bourgogne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/80 via-wine/70 to-wine-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
            <div className="w-16 h-px bg-gold/50" />
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-body">
              Basée en Bourgogne
            </span>
            <div className="w-16 h-px bg-gold/50" />
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-gold-gradient mb-6 animate-fade-up [animation-delay:200ms] opacity-0">
            OENOROS
          </h1>

          {/* Subtitle */}
          <p className="font-elegant text-xl md:text-2xl lg:text-3xl text-cream/90 italic mb-4 animate-fade-up [animation-delay:400ms] opacity-0">
            L'excellence du marketing viticole
          </p>

          {/* Description */}
          <p className="font-body text-cream/70 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up [animation-delay:600ms] opacity-0">
            Agence de communication spécialisée dans l'univers du vin. 
            Nous accompagnons les domaines viticoles, maisons de vins 
            et négociants vers l'excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:800ms] opacity-0">
            <Button variant="hero" size="xl">
              Découvrir nos services
            </Button>
            <Button variant="elegant" size="xl">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up [animation-delay:1000ms] opacity-0">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gold/60 text-xs uppercase tracking-[0.2em] font-body">
            Découvrir
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
