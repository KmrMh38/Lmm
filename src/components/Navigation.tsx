import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'pronostics', label: 'Pronostics' },
    { id: 'montante', label: 'Montante' },
    { id: 'apprendre', label: 'Apprendre' },
    { id: 'bonus', label: 'Bonus' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black border-b border-yellow-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleNavigate('accueil')}
              className="text-yellow-500 font-bold text-xl sm:text-2xl hover:text-yellow-400 transition-colors"
            >
              ⚽ PronoWin
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-yellow-500 text-black'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-yellow-500/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-yellow-500 text-black'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
