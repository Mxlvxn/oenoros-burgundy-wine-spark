import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-8">
              Parlons de votre <span className="text-primary">projet</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Vous avez un projet ? Une question ? N'hésitez pas à nous contacter, 
              nous serions ravis d'échanger avec vous.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Nom
                    </label>
                    <Input
                      type="text"
                      placeholder="Votre nom"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-foreground mb-2 block">
                    Domaine / Entreprise
                  </label>
                  <Input
                    type="text"
                    placeholder="Nom de votre domaine"
                    className="rounded-lg"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Décrivez-nous votre projet..."
                    rows={6}
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button size="lg" className="rounded-full px-10 gap-2">
                  Envoyer <ArrowRight size={16} />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col justify-start gap-10 lg:pt-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <h4 className="font-body text-sm font-medium text-foreground">Email</h4>
                </div>
                <p className="font-body text-muted-foreground">
                  contact@oenoros.fr
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h4 className="font-body text-sm font-medium text-foreground">Localisation</h4>
                </div>
                <p className="font-body text-muted-foreground">
                  Bourgogne-Franche-Comté<br />
                  France
                </p>
              </div>

              <div className="mt-8 p-8 bg-secondary rounded-lg">
                <p className="font-display text-lg text-foreground italic leading-relaxed">
                  "Le vin est le miroir de l'homme."
                </p>
                <p className="font-body text-sm text-muted-foreground mt-3">— Alcée, poète grec</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
