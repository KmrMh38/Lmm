import { TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import CTAButton from '../components/CTAButton';

export default function Montante() {
  const jours = [
    {
      jour: 1,
      match: 'Liverpool vs Chelsea',
      pari: 'Over 1.5 buts',
      cote: '1.30',
      mise: '1000 FCFA',
      gainPotentiel: '1300 FCFA',
      statut: 'en cours',
    },
    {
      jour: 2,
      match: 'Bayern Munich vs Dortmund',
      pari: 'BTTS (Les deux équipes marquent)',
      cote: '1.50',
      mise: '1300 FCFA',
      gainPotentiel: '1950 FCFA',
      statut: 'à venir',
    },
    {
      jour: 3,
      match: 'Juventus vs Inter Milan',
      pari: 'Under 3.5 buts',
      cote: '1.40',
      mise: '1950 FCFA',
      gainPotentiel: '2730 FCFA',
      statut: 'à venir',
    },
    {
      jour: 4,
      match: 'Real Madrid vs Atletico',
      pari: 'Real Madrid gagne',
      cote: '1.65',
      mise: '2730 FCFA',
      gainPotentiel: '4505 FCFA',
      statut: 'à venir',
    },
    {
      jour: 5,
      match: 'PSG vs Lyon',
      pari: 'PSG gagne et Over 2.5',
      cote: '1.80',
      mise: '4505 FCFA',
      gainPotentiel: '8109 FCFA',
      statut: 'à venir',
    },
    {
      jour: 6,
      match: 'Man City vs Arsenal',
      pari: 'BTTS',
      cote: '1.70',
      mise: '8109 FCFA',
      gainPotentiel: '13785 FCFA',
      statut: 'à venir',
    },
    {
      jour: 7,
      match: 'Barcelona vs Sevilla',
      pari: 'Barcelona -1',
      cote: '1.55',
      mise: '13785 FCFA',
      gainPotentiel: '21367 FCFA',
      statut: 'à venir',
    },
    {
      jour: 8,
      match: 'Tottenham vs Chelsea',
      pari: 'Over 2.5 buts',
      cote: '1.75',
      mise: '21367 FCFA',
      gainPotentiel: '37392 FCFA',
      statut: 'à venir',
    },
    {
      jour: 9,
      match: 'AC Milan vs Napoli',
      pari: 'BTTS',
      cote: '1.60',
      mise: '37392 FCFA',
      gainPotentiel: '59827 FCFA',
      statut: 'à venir',
    },
  ];

  const getStatutIcon = (statut: string) => {
    if (statut === 'terminé') return <CheckCircle2 className="text-green-500" size={24} />;
    if (statut === 'en cours') return <Clock className="text-yellow-500" size={24} />;
    return <Clock className="text-gray-500" size={24} />;
  };

  const getStatutBg = (statut: string) => {
    if (statut === 'terminé') return 'bg-green-500/10 border-green-500/30';
    if (statut === 'en cours') return 'bg-yellow-500/10 border-yellow-500/30';
    return 'bg-gray-800 border-yellow-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Montante progressive
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6">
            De 1000 FCFA à plus de 50 000 FCFA
          </p>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp size={32} className="text-black" />
            <h2 className="text-2xl sm:text-3xl font-bold text-black">Comment ça marche ?</h2>
          </div>
          <div className="text-black space-y-3 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base">
              <strong>1.</strong> On commence avec 1000 FCFA
            </p>
            <p className="text-sm sm:text-base">
              <strong>2.</strong> Chaque jour, on mise tous les gains du jour précédent
            </p>
            <p className="text-sm sm:text-base">
              <strong>3.</strong> On sélectionne des cotes sûres entre 1.30 et 1.80
            </p>
            <p className="text-sm sm:text-base">
              <strong>4.</strong> Objectif : atteindre 50 000 FCFA ou plus
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {jours.map((jour) => (
            <div
              key={jour.jour}
              className={`border rounded-lg p-4 sm:p-6 ${getStatutBg(jour.statut)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded font-bold text-sm">
                      Jour {jour.jour}
                    </span>
                    {getStatutIcon(jour.statut)}
                  </div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                    {jour.match}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">{jour.pari}</p>
                </div>
                <div className="text-right">
                  <div className="bg-yellow-500 text-black px-3 py-2 rounded font-bold text-lg sm:text-xl mb-2">
                    {jour.cote}
                  </div>
                  <div className="text-xs text-gray-400 uppercase">Cote</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                <div>
                  <div className="text-gray-400 text-xs sm:text-sm mb-1">Mise</div>
                  <div className="text-white font-semibold text-sm sm:text-base">
                    {jour.mise}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs sm:text-sm mb-1">Gain potentiel</div>
                  <div className="text-yellow-500 font-bold text-sm sm:text-base">
                    {jour.gainPotentiel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-yellow-500 rounded-lg p-6 sm:p-8 text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Prêt à commencer ta montante ?
          </h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Inscris-toi maintenant et utilise le code <span className="text-yellow-500 font-bold">LDCMH</span> pour ton bonus
          </p>
          <CTAButton text="Rejoindre la montante" large />
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 sm:p-6">
          <h4 className="text-yellow-500 font-bold mb-3 text-base sm:text-lg">
            ⚠️ Conseils importants
          </h4>
          <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
            <li>• Ne mise jamais plus que ce que tu peux te permettre de perdre</li>
            <li>• La montante peut s'arrêter à tout moment si un pari échoue</li>
            <li>• Suis strictement les pronostics donnés</li>
            <li>• Retire tes gains régulièrement</li>
          </ul>
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
