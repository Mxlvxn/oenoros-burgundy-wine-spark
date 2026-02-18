import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const contactReasons = [
  "Identité de marque",
  "Stratégie digitale",
  "Production visuelle",
  "Développement commercial",
  "Événementiel",
  "Autre",
];

const Contact = () => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
                Contact
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-8">
                Parlons de votre <span className="italic text-primary">projet</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl">
                Vous avez un projet, une question, ou juste envie de discuter ? 
                On vous répond sous 24h — sans engagement, sans jargon.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-36">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-start gap-6 py-16"
                  >
                    <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl text-foreground mb-3">Message envoyé</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-sm">
                        Merci ! On a bien reçu votre message et on reviendra vers vous 
                        sous 24h. En attendant, n'hésitez pas à explorer nos services.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full mt-4"
                      onClick={() => setSent(false)}
                    >
                      Envoyer un autre message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* Sujet */}
                    <div>
                      <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-4 block">
                        Vous souhaitez parler de
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {contactReasons.map((reason) => (
                          <button
                            key={reason}
                            type="button"
                            onClick={() => setSelectedReason(reason === selectedReason ? null : reason)}
                            className={`font-body text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                              selectedReason === reason
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                            }`}
                          >
                            {reason}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-3 block">
                          Nom
                        </label>
                        <Input
                          type="text"
                          placeholder="Votre nom"
                          required
                          className="rounded-xl border-border/60 bg-transparent focus:border-primary h-12 font-body"
                        />
                      </div>
                      <div>
                        <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-3 block">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="votre@email.com"
                          required
                          className="rounded-xl border-border/60 bg-transparent focus:border-primary h-12 font-body"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-3 block">
                        Domaine / Entreprise
                      </label>
                      <Input
                        type="text"
                        placeholder="Nom de votre domaine ou entreprise"
                        className="rounded-xl border-border/60 bg-transparent focus:border-primary h-12 font-body"
                      />
                    </div>

                    <div>
                      <label className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground mb-3 block">
                        Votre projet
                      </label>
                      <Textarea
                        placeholder="Décrivez-nous votre projet, vos ambitions, ou simplement ce qui vous passe par la tête..."
                        rows={6}
                        className="rounded-xl resize-none border-border/60 bg-transparent focus:border-primary font-body"
                      />
                    </div>

                    <Button type="submit" size="lg" className="rounded-full px-10 gap-2 group">
                      Envoyer le message
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection className="lg:col-span-2 flex flex-col justify-start gap-10 lg:pt-8" delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center border border-border">
                    <Mail className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground">Email</h4>
                </div>
                <a href="mailto:contact@oenoros.fr" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">
                  contact@oenoros.fr
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center border border-border">
                    <MapPin className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground">Localisation</h4>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Dijon, Bourgogne<br />
                  France
                </p>
              </div>

              <div className="w-full h-px bg-border" />

              {/* Questionnaire */}
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Pas sûr par où commencer ?
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  Notre questionnaire vous aide à clarifier vos besoins 
                  avant même notre premier échange.
                </p>
                <a
                  href="https://tally.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-wine-light transition-colors group"
                >
                  Répondre au questionnaire
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Citation */}
              <div className="p-8 bg-primary rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/30 to-transparent pointer-events-none" />
                <p className="font-display text-lg text-primary-foreground italic leading-relaxed relative">
                  "Le vin est le miroir de l'homme."
                </p>
                <p className="font-body text-xs text-primary-foreground/60 mt-4 relative tracking-wide">— Alcée, poète grec</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
