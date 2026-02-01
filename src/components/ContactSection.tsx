import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-wine/30" />
            <span className="text-wine text-sm uppercase tracking-[0.3em] font-body">
              Contact
            </span>
            <div className="w-12 h-px bg-wine/30" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-wine mb-6">
            Créons ensemble
          </h2>

          <p className="font-elegant text-lg md:text-xl text-muted-foreground italic">
            Partagez-nous votre vision, et ensemble, donnons vie à votre projet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-background p-8 md:p-12 rounded-sm border border-border shadow-elegant">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-2 block">
                    Nom
                  </label>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    className="bg-cream border-border focus:border-gold font-body"
                  />
                </div>
                <div>
                  <label className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-cream border-border focus:border-gold font-body"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-2 block">
                  Domaine / Entreprise
                </label>
                <Input
                  type="text"
                  placeholder="Nom de votre domaine"
                  className="bg-cream border-border focus:border-gold font-body"
                />
              </div>

              <div>
                <label className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-2 block">
                  Votre message
                </label>
                <Textarea
                  placeholder="Décrivez-nous votre projet..."
                  rows={5}
                  className="bg-cream border-border focus:border-gold font-body resize-none"
                />
              </div>

              <Button variant="wine" size="xl" className="w-full">
                Envoyer votre message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-sm bg-wine flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-xl text-wine mb-2">
                  Notre adresse
                </h4>
                <p className="font-body text-muted-foreground">
                  Bourgogne-Franche-Comté<br />
                  France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-sm bg-wine flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-xl text-wine mb-2">
                  Téléphone
                </h4>
                <p className="font-body text-muted-foreground">
                  +33 (0)3 80 XX XX XX
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-sm bg-wine flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-xl text-wine mb-2">
                  Email
                </h4>
                <p className="font-body text-muted-foreground">
                  contact@oenoros.fr
                </p>
              </div>
            </div>

            {/* Decorative */}
            <div className="pt-8 border-t border-border">
              <p className="font-elegant text-lg text-muted-foreground italic">
                "Le vin est le plus sain et le plus hygiénique des breuvages."
              </p>
              <p className="font-body text-sm text-wine mt-2">— Louis Pasteur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
