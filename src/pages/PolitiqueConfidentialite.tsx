import { Link } from "react-router-dom";
import AnimatedSection, { AnimatedText } from "@/components/AnimatedSection";

const sections = [
  {
    title: "Qui sommes-nous ?",
    content: [
      "Oenoros est un projet d'agence de communication spécialisée dans le marketing viticole, porté par Melvyn GUEPET, domicilié à Dijon (21), France.",
      "Le site www.oenoros.com est un site vitrine. La seule collecte de données personnelles s'effectue via le formulaire de contact.",
      "Contact : contact@oenoros.com",
    ],
  },
  {
    title: "Données collectées et finalité",
    content: [
      "Lors de l'utilisation du formulaire de contact, les données suivantes peuvent être collectées : votre nom, votre adresse email, le nom de votre domaine ou entreprise, votre message, et le sujet que vous avez sélectionné.",
      "Ces données sont collectées dans le seul but de vous répondre à la suite de votre prise de contact spontanée. La base légale de ce traitement est l'exécution de démarches précontractuelles à votre demande (article 6.1.b du RGPD).",
      "Nous ne collectons aucune autre donnée personnelle. Aucun cookie de tracking, pixel publicitaire ou outil d'analyse comportementale n'est déployé sur ce site.",
    ],
  },
  {
    title: "Outil de traitement des formulaires — Formspree",
    content: [
      "Le formulaire de contact est traité par Formspree Inc. (service tiers, États-Unis). Lorsque vous soumettez le formulaire, vos données transitent par les serveurs de Formspree avant d'être transmises à notre adresse email.",
      "Formspree agit en qualité de sous-traitant au sens du RGPD. Leurs conditions de traitement sont consultables sur : formspree.io/legal/privacy-policy",
      "Vos données ne sont ni revendues, ni partagées avec des tiers à des fins commerciales ou publicitaires.",
    ],
  },
  {
    title: "Durée de conservation",
    content: [
      "Vos données sont conservées le temps nécessaire à la gestion de votre demande, et au maximum 12 mois à compter de votre dernier échange avec nous.",
      "Si aucune relation commerciale ne s'engage à l'issue de nos échanges, vos données sont supprimées dans ce délai.",
    ],
  },
  {
    title: "Hébergement — Vercel",
    content: [
      "Le site est hébergé par Vercel Inc. (San Francisco, États-Unis). Vercel peut traiter des données techniques (adresses IP, logs serveur) à des fins d'infrastructure et de sécurité, dans le cadre de leur propre politique de confidentialité consultable sur vercel.com/legal/privacy-policy.",
      "Ces données ne nous sont pas transmises et ne font l'objet d'aucune exploitation de notre part.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Ce site n'utilise pas de cookies de tracking, de mesure d'audience comportementale, ni de cookies publicitaires.",
      "Vercel Analytics, utilisé uniquement en mode agrégé côté serveur, ne dépose pas de cookie sur votre navigateur.",
      "Aucun consentement cookie n'est requis pour naviguer sur ce site dans sa configuration actuelle.",
    ],
  },
  {
    title: "Vos droits",
    content: [
      "Conformément au RGPD et à la loi Informatique et Libertés (loi n°78-17 du 6 janvier 1978 modifiée), vous disposez des droits suivants sur vos données personnelles :",
      "**Droit d'accès** — vous pouvez demander quelles données nous détenons sur vous.",
      "**Droit de rectification** — vous pouvez demander la correction de données inexactes.",
      "**Droit à l'effacement** — vous pouvez demander la suppression de vos données.",
      "**Droit d'opposition** — vous pouvez vous opposer au traitement de vos données.",
      "**Droit à la portabilité** — vous pouvez demander vos données dans un format structuré.",
      "Pour exercer l'un de ces droits, contactez-nous à : contact@oenoros.com — nous vous répondrons dans un délai maximum de 30 jours.",
    ],
  },
  {
    title: "Réclamation auprès de la CNIL",
    content: [
      "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :",
      "CNIL — 3 Place de Fontenoy, 75007 Paris",
      "Site web : www.cnil.fr",
    ],
  },
  {
    title: "Modifications de cette politique",
    content: [
      "Cette politique de confidentialité peut être mise à jour à tout moment, notamment en cas d'évolution du site ou de la réglementation applicable. La date de dernière mise à jour est indiquée en bas de cette page.",
      "Nous vous encourageons à la consulter régulièrement.",
    ],
  },
];

const PolitiqueConfidentialite = () => {
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
                Confidentialité
              </p>
            </AnimatedText>
            <AnimatedText delay={0.1}>
              <h1 className="font-display text-6xl md:text-8xl text-foreground leading-[1.0] mb-10">
                Politique de<br />
                <span className="italic text-primary">confidentialité</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="font-body text-base text-muted-foreground leading-relaxed max-w-xl">
                La protection de vos données personnelles est une priorité. 
                Cette page vous explique de manière claire et transparente 
                comment nous les collectons, les utilisons et les protégeons.
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
              <AnimatedSection key={index} delay={index * 0.04}>
                <div className="relative pl-8 border-l border-gold/20">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => {
                      const parts = paragraph.split(/\*\*(.*?)\*\*/g);
                      const isBullet = parts.some((p, i) => i % 2 === 1);
                      return (
                        <p
                          key={pIndex}
                          className={`font-body text-[15px] leading-relaxed ${
                            isBullet
                              ? "text-foreground pl-4 border-l border-gold/30"
                              : "text-muted-foreground"
                          }`}
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

            {/* Contact rapide */}
            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl border border-border p-8 hover:border-gold/30 transition-colors duration-300">
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-gold mb-4">
                  Une question ?
                </p>
                <p className="font-display text-2xl text-foreground mb-4">
                  Exercez vos droits facilement
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  Pour toute demande relative à vos données personnelles — accès, rectification, 
                  suppression, opposition — écrivez-nous directement. Nous nous engageons à 
                  vous répondre sous 30 jours.
                </p>
                <a
                  href="mailto:contact@oenoros.com?subject=Demande RGPD"
                  className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold/70 transition-colors duration-300 uppercase tracking-[0.15em]"
                >
                  <span className="w-6 h-px bg-gold" />
                  contact@oenoros.com
                </a>
              </div>
            </AnimatedSection>

            {/* Liens vers mentions légales */}
            <AnimatedSection delay={0.35}>
              <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground/40">
                  Dernière mise à jour —{" "}
                  {new Date().toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <Link
                  to="/mentions-legales"
                  className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground/40 hover:text-gold transition-colors duration-300"
                >
                  Voir les mentions légales →
                </Link>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
};

export default PolitiqueConfidentialite;
