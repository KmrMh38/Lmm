import { TrendingUp, Target, Lightbulb, Gift, Users } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import PronosticCard from '../components/PronosticCard';

interface AccueilProps {
  onNavigate: (page: string) => void;
}

export default function Accueil({ onNavigate }: AccueilProps) {
  const pronosticsApercu = [
    {
      match: 'PSG vs Marseille',
      pari: 'Over 2.5 buts',
      cote: '1.75',
      confiance: 2,
    },
    {
      match: 'Man City vs Arsenal',
      pari: 'BTTS (Les deux équipes marquent)',
      cote: '1.85',
      confiance: 5,
    },
    {
      match: 'Real Madrid vs Barcelona',
      pari: 'Real Madrid gagne',
      cote: '2.10',
      confiance: 3,
    },
  ];

  const montanteApercu = [
    { jour: 1, match: 'Liverpool vs Chelsea', pari: 'Over 1.5', cote: '1.30' },
    { jour: 2, match: 'Bayern vs Dortmund', pari: 'BTTS', cote: '1.50' },
    { jour: 3, match: 'Juventus vs Inter', pari: 'Under 3.5', cote: '1.40' },
  ];

  const conseils = [
    {
      icon: <Target className="text-yellow-500" size={32} />,
      titre: 'Analyse avant tout',
      texte: 'Ne parie jamais sans avoir analysé les statistiques et la forme des équipes',
    },
    {
      icon: <TrendingUp className="text-yellow-500" size={32} />,
      titre: 'Gère ton budget',
      texte: 'Fixe-toi un budget mensuel et respecte-le. Ne parie que ce que tu peux perdre',
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={32} />,
      titre: 'Évite les grosses cotes',
      texte: 'Les petites cotes sûres valent mieux que les grosses cotes risquées',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Gagne de l'argent avec les{' '}
            <span className="text-yellow-500">paris sportifs</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-10">
            Pronostics fiables + bonus exclusif
          </p>
          <CTAButton text="Obtenir le bonus" large />

          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
            <Users size={20} className="text-yellow-500" />
            <span className="text-sm sm:text-base">523 parieurs actifs aujourd'hui</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Pronostics du jour
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Nos meilleurs pronostics analysés par des experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {pronosticsApercu.map((prono, index) => (
              <PronosticCard key={index} {...prono} />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('pronostics')}
              className="bg-gray-800 hover:bg-gray-700 text-yellow-500 font-semibold px-8 py-3 rounded-lg transition-colors border border-yellow-500/30"
            >
              Voir tous les pronostics
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Montante en cours
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              De 1000 FCFA à 50 000 FCFA
            </p>
          </div>

          <div className="bg-black border border-yellow-500/30 rounded-lg p-4 sm:p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              {montanteApercu.map((jour) => (
                <div
                  key={jour.jour}
                  className="flex items-center justify-between p-4 bg-gray-900 rounded-lg"
                >
                  <div>
                    <div className="text-yellow-500 font-bold mb-1">Jour {jour.jour}</div>
                    <div className="text-white text-sm sm:text-base">{jour.match}</div>
                    <div className="text-gray-400 text-sm">{jour.pari}</div>
                  </div>
                  <div className="bg-yellow-500 text-black px-3 py-2 rounded font-bold text-sm sm:text-base">
                    {jour.cote}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => onNavigate('montante')}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
              >
                Voir la montante complète
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Conseils rapides
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {conseils.map((conseil, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-yellow-500/30 rounded-lg p-6 text-center hover:border-yellow-500 transition-all"
              >
                <div className="flex justify-center mb-4">{conseil.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{conseil.titre}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{conseil.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <Gift size={48} className="mx-auto mb-4 text-black" />
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Bonus exclusif disponible
          </h2>
          <p className="text-lg sm:text-xl text-gray-900 mb-6">
            Utilise le code promo <span className="font-bold">LDCMH</span> pour obtenir ton
            bonus
          </p>
          <p className="text-sm text-red-700 font-semibold mb-6">
            Offre limitée - Ne rate pas cette opportunité
          </p>
          <CTAButton text="S'inscrire maintenant" large className="bg-black hover:bg-gray-900 text-yellow-500" />
        </div>
      </section>

      <footer className="py-8 px-4 bg-black border-t border-yellow-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            ⚠️ Les paris sportifs comportent des risques. Jouez de manière responsable.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Ce site est destiné à des fins d'information et de divertissement uniquement.
          </p>
        </div>
      </footer>
    </div>
  );
}
