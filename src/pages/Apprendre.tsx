import { BookOpen, TrendingUp, HelpCircle, Target, Shield, Wallet } from 'lucide-react';
import { useState } from 'react';

export default function Apprendre() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const marches = [
    {
      nom: 'Over/Under (Plus/Moins)',
      icon: <TrendingUp className="text-yellow-500" size={32} />,
      definition:
        'Pari sur le nombre total de buts marqués dans un match, supérieur ou inférieur à une limite fixée.',
      exemple:
        'Over 2.5 buts signifie que tu paries qu\'il y aura 3 buts ou plus dans le match. Under 2.5 buts signifie 2 buts ou moins.',
      astuce:
        'Analyse les moyennes de buts des deux équipes sur leurs 5 derniers matchs pour mieux prédire.',
    },
    {
      nom: 'BTTS (Both Teams To Score)',
      icon: <Target className="text-yellow-500" size={32} />,
      definition:
        'Pari sur le fait que les deux équipes marqueront au moins un but chacune pendant le match.',
      exemple:
        'Si tu paries BTTS Oui et que le score final est 2-1, tu gagnes car les deux équipes ont marqué.',
      astuce:
        'Idéal pour les matchs entre équipes avec des défenses faibles et des attaques fortes.',
    },
    {
      nom: 'Handicap',
      icon: <Shield className="text-yellow-500" size={32} />,
      definition:
        'Un avantage ou désavantage virtuel donné à une équipe pour équilibrer les cotes.',
      exemple:
        'Si tu paries sur Équipe A -1, elle doit gagner par au moins 2 buts d\'écart pour que tu gagnes.',
      astuce:
        'Utilise le handicap quand une équipe est clairement favorite pour obtenir une meilleure cote.',
    },
  ];

  const conseils = [
    {
      titre: 'Gestion de la bankroll',
      icon: <Wallet className="text-yellow-500" size={28} />,
      points: [
        'Ne mise jamais plus de 5% de ton capital total sur un seul pari',
        'Fixe-toi un budget mensuel et respecte-le strictement',
        'Ne cherche pas à récupérer tes pertes en misant plus gros',
        'Garde une partie de tes gains, ne réinvestis pas tout',
      ],
    },
    {
      titre: 'Discipline',
      icon: <Shield className="text-yellow-500" size={28} />,
      points: [
        'Ne parie pas sous le coup de l\'émotion',
        'Évite de parier sur ton équipe favorite par passion',
        'Prends des pauses après plusieurs paris perdants',
        'N\'augmente pas tes mises après une série de victoires',
      ],
    },
    {
      titre: 'Stratégie gagnante',
      icon: <Target className="text-yellow-500" size={28} />,
      points: [
        'Spécialise-toi sur une ligue ou compétition que tu connais bien',
        'Analyse les statistiques avant chaque pari',
        'Privilégie les cotes entre 1.50 et 2.50 pour plus de régularité',
        'Combine plusieurs petits gains plutôt qu\'un gros jackpot',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Comment créer un compte sur Melbet ?',
      reponse:
        'Clique sur "S\'inscrire", remplis tes informations personnelles, vérifie ton numéro de téléphone, et ton compte sera créé en quelques minutes.',
    },
    {
      question: 'Comment utiliser le code promo MOULIOM100 ?',
      reponse:
        'Lors de ton inscription, entre le code MOULIOM100 dans le champ "Code promotionnel". Le bonus sera automatiquement ajouté après ton premier dépôt.',
    },
    {
      question: 'Comment déposer avec Mobile Money ?',
      reponse:
        'Va dans "Dépôt", sélectionne MTN MoMo ou Orange Money, entre le montant, confirme avec ton code PIN. L\'argent arrive instantanément sur ton compte.',
    },
    {
      question: 'Quel est le montant minimum pour parier ?',
      reponse:
        'Le minimum varie selon le bookmaker, mais généralement tu peux commencer à partir de 100 FCFA.',
    },
    {
      question: 'Comment retirer mes gains ?',
      reponse:
        'Va dans "Retrait", choisis ton mode de paiement (Mobile Money), entre le montant, et confirme. Les retraits prennent généralement 1 à 24 heures.',
    },
    {
      question: 'Puis-je parier depuis mon téléphone ?',
      reponse:
        'Oui, Melbet dispose d\'une application mobile et d\'un site web responsive optimisé pour mobile.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <BookOpen size={48} className="mx-auto text-yellow-500 mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Apprendre à parier
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Tout ce qu'il faut savoir pour devenir un parieur gagnant
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            Marchés de paris expliqués
          </h2>
          <div className="space-y-6">
            {marches.map((marche, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-yellow-500/30 rounded-lg p-4 sm:p-6 hover:border-yellow-500 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {marche.icon}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{marche.nom}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-yellow-500 font-semibold mb-2 text-sm sm:text-base">
                      Définition
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {marche.definition}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-yellow-500 font-semibold mb-2 text-sm sm:text-base">
                      Exemple
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {marche.exemple}
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3 sm:p-4">
                    <h4 className="text-yellow-500 font-semibold mb-2 text-sm sm:text-base">
                      💡 Astuce
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {marche.astuce}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            Conseils de paris
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {conseils.map((conseil, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-yellow-500/30 rounded-lg p-4 sm:p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  {conseil.icon}
                  <h3 className="text-lg sm:text-xl font-bold text-white">{conseil.titre}</h3>
                </div>
                <ul className="space-y-3">
                  {conseil.points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-sm leading-relaxed flex gap-2">
                      <span className="text-yellow-500 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
            Questions fréquentes (FAQ)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-yellow-500/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <HelpCircle className="text-yellow-500 flex-shrink-0" size={24} />
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-yellow-500 text-2xl flex-shrink-0 ml-2">
                    {faqOpen === index ? '−' : '+'}
                  </span>
                </button>
                {faqOpen === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-9">
                      {faq.reponse}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Prêt à mettre en pratique ?
          </h3>
          <p className="text-gray-900 mb-6 text-sm sm:text-base">
            Commence maintenant avec ton bonus exclusif
          </p>
          <a
            href="https://melbet.com/?refid=MOULIOM100"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-900 text-yellow-500 font-bold px-8 py-4 rounded-lg transition-all"
          >
            Commencer à parier
          </a>
        </div>
      </div>

      <footer className="py-8 px-4 bg-black border-t border-yellow-500/30 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            ⚠️ Les paris sportifs comportent des risques. Jouez de manière responsable.
          </p>
        </div>
      </footer>
    </div>
  );
}
