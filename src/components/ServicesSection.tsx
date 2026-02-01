import { Sparkles, Palette, Globe, TrendingUp, Camera, Users } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Identité de Marque",
    description: "Création d'identités visuelles uniques qui capturent l'essence et le terroir de votre domaine.",
  },
  {
    icon: Globe,
    title: "Stratégie Digitale",
    description: "Présence web optimisée, réseaux sociaux et marketing digital pour conquérir de nouveaux marchés.",
  },
  {
    icon: Camera,
    title: "Production Visuelle",
    description: "Photographie, vidéographie et direction artistique pour sublimer vos cuvées.",
  },
  {
    icon: TrendingUp,
    title: "Développement Commercial",
    description: "Stratégies de croissance et positionnement premium pour valoriser votre excellence.",
  },
  {
    icon: Sparkles,
    title: "Événementiel",
    description: "Conception et organisation d'événements exclusifs pour vos lancements et dégustations.",
  },
  {
    icon: Users,
    title: "Relations Presse",
    description: "Mise en relation avec les influenceurs et médias spécialisés du monde viticole.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-wine/30" />
            <span className="text-wine text-sm uppercase tracking-[0.3em] font-body">
              Nos expertises
            </span>
            <div className="w-12 h-px bg-wine/30" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-wine mb-6">
            Services sur mesure
          </h2>
          
          <p className="font-elegant text-lg md:text-xl text-muted-foreground italic">
            Une approche holistique pour révéler le caractère unique de votre maison
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 md:p-10 bg-background rounded-sm border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-sm bg-wine/5 flex items-center justify-center mb-6 group-hover:bg-wine transition-colors duration-300">
                <service.icon className="w-6 h-6 text-wine group-hover:text-gold transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 w-0 h-px bg-gold group-hover:w-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
