import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle, ArrowUpRight } from "lucide-react";
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

const quotes = [
  {
    text: "Le vin est le miroir de l'homme.",
    author: "Alcée, poète grec"
  },
  {
    text: "Le vin est de l'eau emplie de soleil.",
    author: "Galilée"
  },
  {
    text: "En Bourgogne, quand on parle d'un 'climat', on ne lève pas les yeux au ciel, on les baisse sur la terre.",
    author: "Bernard Pivot"
  },
  {
    text: "Le vin est la partie intellectuelle d'un repas.",
    author: "Alexandre Dumas"
  },
  {
    text: "Dieu n'a fait que l'eau, mais l'homme a fait le vin.",
    author: "Victor Hugo"
  }
];

const Contact = () => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 15000); // Change toutes les 15 secondes
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
                Contact
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-6xl md:text-8xl text-foreground leading-[1.0] mb-10">
                Parlons de<br />
                votre <span className="italic text-primary">projet</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl">
                Un projet, une question, ou juste l'envie de discuter ? 
                Nous vous répondons sous 24h — sans engagement, sans jargon.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* ─── FORMULAIRE + INFO ─── */}
      <section className="pb-36 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 pt-20">
            
            {/* Formulaire */}
            <AnimatedSection className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-start gap-8 py-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.4, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-cream border border-border flex items-center justify-center"
                    >
                      <CheckCircle className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <h3 className="font-display text-4xl text-foreground mb-4">Message envoyé</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-sm">
                        Merci ! On a bien reçu votre message et on reviendra vers vous 
                        sous 24h. En attendant, n'hésitez pas à explorer nos services.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full mt-2"
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
                    className="space-y-10"
                  >
                    {/* Sujet */}
                    <div>
                      <label className="font-body text-[11px] uppercase tracking-[0.2em] text-foreground mb-5 block">
                        Vous souhaitez parler de
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {contactReasons.map((reason) => (
                          <motion.button
                            key={reason}
                            type="button"
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedReason(reason === selectedReason ? null : reason)}
                            className={`font-body text-xs px-5 py-2.5 rounded-full border transition-all duration-200 ${
                              selectedReason === reason
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                            }`}
                          >
                            {reason}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-[11px] uppercase tracking-[0.2em] text-foreground mb-3 block">
                          Nom
                        </label>
                        <Input
                          type="text"
                          placeholder="Votre nom"
                          required
                          className="rounded-xl border-border/60 bg-transparent focus:border-primary h-13 font-body text-sm"
                        />
                      </div>
                      <div>
                        <label className="font-body text-[11px] uppercase tracking-[0.2em] text-foreground mb-3 block">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="votre@email.com"
                          required
                          className="rounded-xl border-border/60 bg-transparent focus:border-primary h-13 font-body text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-[11px] uppercase tracking-[0.2em] text-foreground mb-3 block">
                        Domaine / Entreprise
                      </label>
                      <Input
                        type="text"
                        placeholder="Nom de votre domaine ou entreprise"
                        className="rounded-xl border-border/60 bg-transparent focus:border-primary h-13 font-body text-sm"
                      />
                    </div>

                    <div>
                      <label className="font-body text-[11px] uppercase tracking-[0.2em] text-foreground mb-3 block">
                        Votre projet
                      </label>
                      <Textarea
                        placeholder="Décrivez-nous votre projet, vos ambitions, ou simplement ce qui vous passe par la tête..."
                        rows={6}
                        className="rounded-xl resize-none border-border/60 bg-transparent focus:border-primary font-body text-sm"
                      />
                    </div>

                    <Button type="submit" size="lg" className="rounded-full px-12 gap-2 group h-14 text-base w-full sm:w-auto">
                      Envoyer le message
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </AnimatedSection>

            {/* Colonne info */}
            <AnimatedSection className="lg:col-span-2 flex flex-col gap-10 lg:pt-2" delay={0.15}>
              
              {/* Infos de contact */}
              <div className="space-y-8">
                <a href="mailto:contact@oenoros.fr" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center border border-border group-hover:border-gold/30 group-hover:bg-gold/5 transition-all duration-300 shrink-0">
                    <Mail className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-1">Email</p>
                    <p className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">contact@oenoros.fr</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center border border-border shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-1">Localisation</p>
                    <p className="font-body text-sm text-foreground">Dijon, Bourgogne<br />France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center border border-border shrink-0">
                    <Phone className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-1">Délai de réponse</p>
                    <p className="font-body text-sm text-foreground">Sous 24h ouvrées</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border" />

              {/* Questionnaire */}
              <div className="rounded-2xl border border-border p-7 hover:border-gold/30 transition-colors duration-300">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-3">
                  Vous ne savez pas par où commencer ?
                </p>
                <h4 className="font-display text-xl text-foreground mb-3">
                  Commencez par notre questionnaire
                </h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-6">
                  3 minutes pour nous aider à comprendre vos besoins et préparer notre premier échange. 
                  Gratuit, sans engagement.
                </p>
                <a
                  href="https://tally.so/r/obE19M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-wine-light transition-colors group font-medium"
                >
                  Répondre au questionnaire
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Bloc Citations Animé */}
              <div className="p-8 bg-primary rounded-2xl relative overflow-hidden min-h-[180px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/40 to-transparent pointer-events-none" />
                <span className="font-display text-5xl text-gold/20 leading-none block mb-2 relative">"</span>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                  >
                    <p className="font-display text-lg text-primary-foreground leading-relaxed -mt-3">
                      {quotes[currentQuote].text}
                    </p>
                    <p className="font-body text-xs text-primary-foreground/40 mt-5 relative tracking-[0.15em] uppercase">
                      — {quotes[currentQuote].author}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
