import Navigation from './components/Navigation';
import { routing } from './utils/data/routing';
import { CostsProvider } from './contexts/CostsProvider';

function App() {
  return (
    <CostsProvider>
      <div className="min-h-screen flex flex-col items-center">
        <Navigation routing={routing} />
      </div>
    </CostsProvider>
  );
}

export default App;
