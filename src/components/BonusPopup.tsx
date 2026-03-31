import { useEffect, useState } from 'react';
import { X, Gift } from 'lucide-react';

const AFFILIATE_LINK = 'https://refpa3665.com/L?tag=d_4161265m_45415c_&site=4161265&ad=45415';

export default function BonusPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500 rounded-lg max-w-md w-full p-6 sm:p-8 relative animate-scale-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <Gift size={56} className="mx-auto text-yellow-500 mb-4 animate-bounce" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Bonus disponible maintenant !
          </h2>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            Ne rate pas ton bonus exclusif
          </p>
          <div className="bg-yellow-500 text-black text-xl sm:text-2xl font-bold py-3 px-4 rounded mb-6 inline-block">
            LDCMH
          </div>
          <p className="text-red-400 font-semibold mb-6 text-sm sm:text-base">
            Offre limitée - Inscris-toi maintenant
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 text-base sm:text-lg"
          >
            Récupérer mon bonus
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="mt-4 text-gray-400 hover:text-white text-sm transition-colors"
          >
            Non merci
          </button>
        </div>
      </div>
    </div>
  );
}
