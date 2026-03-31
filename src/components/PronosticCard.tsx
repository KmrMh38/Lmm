import { Star, TrendingUp } from 'lucide-react';

interface PronosticCardProps {
  match: string;
  pari: string;
  cote: string;
  confiance: number;
  analyse?: string;
}

export default function PronosticCard({ match, pari, cote, confiance, analyse }: PronosticCardProps) {
  return (
    <div className="bg-gray-900 border border-yellow-500/30 rounded-lg p-4 sm:p-6 hover:border-yellow-500 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-base sm:text-lg">{match}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < confiance ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-yellow-500" />
          <span className="text-gray-300 text-sm sm:text-base">{pari}</span>
        </div>
        <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded font-bold text-sm sm:text-base">
          Cote: {cote}
        </div>
      </div>

      {analyse && (
        <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-3">
          {analyse}
        </p>
      )}
    </div>
  );
}
