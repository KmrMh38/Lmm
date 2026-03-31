import { useState } from 'react';
import { Calendar } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import PronosticCard from '../components/PronosticCard';

export default function Pronostics() {
  const [filtre, setFiltre] = useState<'aujourd-hui' | 'semaine'>('aujourd-hui');

  const pronosticsAujourdhui = [
    {
      match: 'PSG vs Marseille',
      pari: 'Over 2.5 buts',
      cote: '1.75',
      confiance: 4,
      analyse:
        'Les deux équipes ont une attaque puissante. PSG marque en moyenne 2.8 buts par match à domicile.',
    },
    {
      match: 'Man City vs Arsenal',
      pari: 'BTTS (Les deux équipes marquent)',
      cote: '1.85',
      confiance: 5,
      analyse:
        'Match de haute intensité entre deux attaques de classe mondiale. Les 4 derniers affrontements ont vu les deux équipes marquer.',
    },
    {
      match: 'Real Madrid vs Barcelona',
      pari: 'Real Madrid gagne',
      cote: '2.10',
      confiance: 3,
      analyse:
        'Real Madrid est en meilleure forme avec 5 victoires consécutives. Avantage du terrain.',
    },
    {
      match: 'Bayern Munich vs Dortmund',
      pari: 'Over 3.5 buts',
      cote: '2.00',
      confiance: 4,
      analyse:
        'Der Klassiker produit toujours des matchs spectaculaires avec beaucoup de buts. Moyenne de 4.2 buts sur les 5 derniers matchs.',
    },
    {
      match: 'Liverpool vs Chelsea',
      pari: 'Liverpool gagne et BTTS',
      cote: '3.20',
      confiance: 3,
      analyse:
        'Liverpool est fort à Anfield mais Chelsea marque régulièrement en déplacement.',
    },
    {
      match: 'Juventus vs Inter Milan',
      pari: 'Under 2.5 buts',
      cote: '1.65',
      confiance: 4,
      analyse:
        'Derby tactique où les défenses dominent. Les 3 derniers matchs ont vu moins de 3 buts.',
    },
  ];

  const pronosticsSemaine = [
    ...pronosticsAujourdhui,
    {
      match: 'Tottenham vs Manchester United',
      pari: 'BTTS',
      cote: '1.70',
      confiance: 4,
      analyse: 'Deux équipes offensives qui ont tendance à encaisser des buts.',
    },
    {
      match: 'AC Milan vs Napoli',
      pari: 'Napoli gagne',
      cote: '2.30',
      confiance: 3,
      analyse: 'Napoli est en excellente forme et reste sur 7 victoires consécutives.',
    },
    {
      match: 'Atletico Madrid vs Sevilla',
      pari: 'Under 2.5 buts',
      cote: '1.80',
      confiance: 4,
      analyse: 'Atletico privilégie la défense, Sevilla manque de puissance offensive.',
    },
  ];

  const pronostics = filtre === 'aujourd-hui' ? pronosticsAujourdhui : pronosticsSemaine;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Pronostics sportifs
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Analyses détaillées et pronostics fiables
          </p>
        </div>

        <div className="mb-8">
          <CTAButton text="Parier maintenant" large className="w-full sm:w-auto" />
        </div>

        <div className="bg-gray-900 border border-yellow-500/30 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-yellow-500" size={24} />
            <span className="text-white font-semibold">Filtrer par période</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setFiltre('aujourd-hui')}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-lg font-semibold transition-all ${
                filtre === 'aujourd-hui'
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Aujourd'hui
            </button>
            <button
              onClick={() => setFiltre('semaine')}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-lg font-semibold transition-all ${
                filtre === 'semaine'
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Cette semaine
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {pronostics.map((prono, index) => (
            <PronosticCard key={index} {...prono} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Prêt à parier ?
          </h3>
          <p className="text-gray-900 mb-6 text-sm sm:text-base">
            Utilise le code <span className="font-bold">MOULIOM100</span> pour ton bonus
          </p>
          <CTAButton text="Parier maintenant" large className="bg-black hover:bg-gray-900 text-yellow-500" />
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
