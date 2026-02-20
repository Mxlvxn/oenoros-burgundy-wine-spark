import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const sections = [
  {
    title: "Éditeur du site",
    content: [
      "Le présent site internet accessible à l'adresse www.oenoros.fr est édité à titre personnel par :",
      "**Melvyn GUEPET**",
      "Projet en cours de création sous le nom commercial : OENOROS",
      "Domiciliation : Dijon (21000), Bourgogne, France",
      "Email : contact@oenoros.com",
      "Téléphone : +33 7 66 40 98 54",
      "Note : OENOROS est actuellement un projet commercial non encore constitué en société. Toute démarche contractuelle est effectuée à titre personnel par les porteurs du projet.",
    ],
  },
  {
    title: "Hébergeur",
    content: [
      "Le site est hébergé par :",
      "**Vercel Inc.**",
      "340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis",
      "Site web : https://vercel.com",
      "Vercel peut collecter des données techniques de navigation à des fins d'infrastructure (logs, performances). Ces données sont gérées conformément à la politique de confidentialité de Vercel, disponible sur leur site.",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble des éléments constituant ce site (textes, visuels, logo, typographies, structure, code) est protégé par le droit d'auteur et appartient exclusivement à Oenoros / ses porteurs de projet, sauf mention contraire.",
      "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable des éditeurs.",
      "Le logo OENOROS, la charte graphique et tous les visuels produits pour ce site sont des créations originales protégées.",
    ],
  },
  {
    title: "Limitation de responsabilité",
    content: [
      "Les informations présentes sur ce site sont fournies à titre indicatif. OENOROS s'efforce de maintenir le site à jour et exact, mais ne saurait garantir l'exhaustivité ou l'absence d'erreurs des informations publiées.",
      "OENOROS ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation des informations qu'il contient.",
      "Des liens hypertextes peuvent pointer vers des sites tiers. OENOROS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
    ],
  },
  {
    title: "Droit applicable et juridiction",
    content: [
      "Le présent site et ses mentions légales sont soumis au droit français.",
      "En cas de litige relatif à l'utilisation du site, les tribunaux compétents seront ceux du ressort de Dijon (21), France.",
    ],
  },
  {
    title: "Vos droits — contact et opposition",
    content: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez de droits sur vos données personnelles : droit d'accès, de rectification, d'effacement, d'opposition et de portabilité.",
      "Pour exercer ces droits ou pour toute question relative au traitement de vos données, vous pouvez nous contacter à l'adresse suivante : contact@oenoros.fr",
      "Si vous ne souhaitez pas que vos données transmises via le formulaire de contact soient conservées, il vous suffit de nous en faire la demande par email. Vos données seront supprimées dans un délai de 30 jours.",
      "En cas de désaccord persistant, vous pouvez introduire une réclamation auprès de la CNIL : www.cnil.fr",
    ],
  },
];

const MentionsLegales = () => {
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
                Légal
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-6xl md:text-8xl text-foreground leading-[1.0] mb-10">
                Mentions<br />
                <span className="italic text-primary">légales</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl">
                Conformément à la loi française n°2004-575 du 21 juin 2004 pour la 
                confiance dans l'économie numérique, voici les informations légales 
                relatives au site OENOROS.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* ─── CONTENU ─── */}
      <section className="pb-36 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl pt-20 space-y-20">
            {sections.map((section, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="relative pl-8 border-l border-gold/20">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                    0{index + 1}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => {
                      // Render bold markdown-style **text**
                      const parts = paragraph.split(/\*\*(.*?)\*\*/g);
                      return (
                        <p
                          key={pIndex}
                          className="font-body text-[15px] text-muted-foreground leading-relaxed"
                        >
                          {parts.map((part, i) =>
                            i % 2 === 1 ? (
                              <span key={i} className="text-foreground font-medium">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Date de mise à jour */}
            <AnimatedSection delay={0.3}>
              <div className="pt-8 border-t border-border">
                <p className="font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground/40">
                  Dernière mise à jour — {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentionsLegales;
