import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import BonusPopup from './components/BonusPopup';
import Accueil from './pages/Accueil';
import Pronostics from './pages/Pronostics';
import Montante from './pages/Montante';
import Apprendre from './pages/Apprendre';
import Bonus from './pages/Bonus';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onNavigate={handleNavigate} />;
      case 'pronostics':
        return <Pronostics />;
      case 'montante':
        return <Montante />;
      case 'apprendre':
        return <Apprendre />;
      case 'bonus':
        return <Bonus />;
      default:
        return <Accueil onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <BonusPopup />
    </div>
  );
}

export default App;
