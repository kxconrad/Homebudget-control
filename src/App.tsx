import React from 'react';
import Navigation from './components/Navigation';
import { routing } from './utils/data/routing';
import { GlobalProvider } from './contexts/GlobalProvider';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <div className="min-h-screen flex flex-col items-center">
        <Navigation routing={routing} />
      </div>
    </GlobalProvider>
  );
};

export default App;
