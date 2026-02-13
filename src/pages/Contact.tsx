import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatedText>
              <p className="font-body text-[11px] uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold" />
                Contact
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-8">
                Parlons de votre <span className="italic text-primary">projet</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
                Vous avez un projet ? Une question ? N'hésitez pas à nous contacter, 
                nous serions ravis d'échanger avec vous.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-36">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-3 block">
                      Nom
                    </label>
                    <Input
                      type="text"
                      placeholder="Votre nom"
                      className="rounded-lg border-border/60 bg-transparent focus:border-primary h-12"
                    />
                  </div>
                  <div>
                    <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-3 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      className="rounded-lg border-border/60 bg-transparent focus:border-primary h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-3 block">
                    Domaine / Entreprise
                  </label>
                  <Input
                    type="text"
                    placeholder="Nom de votre domaine"
                    className="rounded-lg border-border/60 bg-transparent focus:border-primary h-12"
                  />
                </div>

                <div>
                  <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-3 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Décrivez-nous votre projet..."
                    rows={6}
                    className="rounded-lg resize-none border-border/60 bg-transparent focus:border-primary"
                  />
                </div>

                <Button size="lg" className="rounded-full px-10 gap-2 group">
                  Envoyer 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection className="lg:col-span-2 flex flex-col justify-start gap-12 lg:pt-8" delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h4 className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground">Email</h4>
                </div>
                <a href="mailto:contact@oenoros.fr" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">
                  contact@oenoros.fr
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h4 className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground">Localisation</h4>
                </div>
                <p className="font-body text-muted-foreground">
                  Dijon, Bourgogne<br />
                  France
                </p>
              </div>

              <div className="mt-4 p-8 bg-primary rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/30 to-transparent pointer-events-none" />
                <p className="font-display text-lg text-primary-foreground/70 italic leading-relaxed relative">
                  "Le vin est le miroir de l'homme."
                </p>
                <p className="font-body text-xs text-primary-foreground/25 mt-4 relative tracking-wide">— Alcée, poète grec</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
