import { Gift, UserPlus, Ticket, Smartphone, CheckCircle2, Clock } from 'lucide-react';
import CTAButton from '../components/CTAButton';

export default function Bonus() {
  const etapes = [
    {
      numero: 1,
      titre: 'Créer un compte',
      icon: <UserPlus size={32} className="text-yellow-500" />,
      description:
        'Clique sur le bouton d\'inscription, choisis l\'inscription par telephone, entre les données demandées (numero de telephone & le code promo --LDCMH--).',
    },
    {
      numero: 2,
      titre: 'Activation du code promo',
      icon: <Ticket size={32} className="text-yellow-500" />,
      description:
        'Dans la section MON COMPTE remplissez tous les champs requis (nom, prenom etc...)',
    },
    {
      numero: 3,
      titre: 'Faire un dépôt',
      icon: <Smartphone size={32} className="text-yellow-500" />,
      description:
        'Après s\'être rassuré d\'avoir tout remplis,faites un dépôt d\'aumoins 600 FCFA via MTN Mobile Money ou Orange Money pour recevoir ton bonus.',
    },
  ];

  const modesPaiement = [
    {
      nom: 'MTN Mobile Money',
      logo: '📱',
      couleur: 'bg-yellow-500',
      instructions: [
        'Sélectionne "MTN MoMo" comme mode de paiement',
        'Entre le montant à déposer',
        'Confirme avec ton code PIN MTN',
        'L\'argent arrive instantanément',
      ],
    },
    {
      nom: 'Orange Money',
      logo: '🍊',
      couleur: 'bg-orange-500',
      instructions: [
        'Sélectionne "Orange Money" comme mode de paiement',
        'Entre le montant à déposer',
        'Confirme avec ton code PIN Orange',
        'L\'argent arrive instantanément',
      ],
    },
  ];

  const avantages = [
    'Bonus de bienvenue sur ton premier dépôt',
    'Pronostics quotidiens gratuits',
    'Support client en français 24/7',
    'Retraits rapides en Mobile Money',
    'Application mobile disponible',
    'Cotes compétitives sur tous les sports',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <Gift size={56} className="mx-auto text-yellow-500 mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Bonus exclusif
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            Utilise le code <span className="text-yellow-500 font-bold text-xl">LDCMH</span>{' '}
            pour ton bonus
          </p>
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <Clock size={16} />
            Offre limitée - Ne rate pas cette opportunité
          </div>
        </div>

        <div className="mb-12">
          <CTAButton text="S'inscrire sur Melbet" large className="w-full sm:w-auto" />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Comment obtenir ton bonus en 3 étapes
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {etapes.map((etape) => (
              <div
                key={etape.numero}
                className="bg-gray-900 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-500 transition-all"
              >
                <div className="bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {etape.numero}
                </div>
                <div className="mb-4">{etape.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{etape.titre}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{etape.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Modes de paiement disponibles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modesPaiement.map((mode, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-500 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{mode.logo}</span>
                  <h3 className="text-xl font-bold text-white">{mode.nom}</h3>
                </div>
                <ul className="space-y-3">
                  {mode.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Pourquoi choisir Melbet ?
          </h2>
          <div className="bg-gray-900 border border-yellow-500/30 rounded-lg p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">{avantage}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-6 sm:p-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 text-center">
                Commence maintenant et profite de ton bonus
              </h2>
              <div className="bg-black rounded-lg p-6 mb-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Ton code promo exclusif :</p>
                  <div className="bg-yellow-500 text-black text-2xl sm:text-3xl font-bold py-4 px-6 rounded inline-block">
                    LDCMH
                  </div>
                </div>
              </div>
              <div className="text-center">
                <CTAButton
                  text="Récupérer mon bonus maintenant"
                  large
                  className="bg-black hover:bg-gray-900 text-yellow-500"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 sm:p-6">
          <h4 className="text-yellow-500 font-bold mb-3 text-base sm:text-lg">
            📋 Conditions importantes
          </h4>
          <ul className="text-gray-300 space-y-2 text-sm leading-relaxed">
            <li>• Le bonus est réservé aux nouveaux utilisateurs</li>
            <li>• Le code promo doit être entré lors de l'inscription</li>
            <li>• Un dépôt minimum est requis pour activer le bonus</li>
            <li>• Consulte les conditions générales sur le site Melbet</li>
            <li>• Les paris sportifs sont réservés aux personnes majeures</li>
          </ul>
        </div>
      </div>

      <footer className="py-8 px-4 bg-black border-t border-yellow-500/30 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            ⚠️ Les paris sportifs comportent des risques. Jouez de manière responsable.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Ce site est à des fins d'information. Vous devez avoir 18 ans ou plus pour parier.
          </p>
        </div>
      </footer>
    </div>
  );
}
