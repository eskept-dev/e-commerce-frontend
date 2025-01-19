import Router from './Router';
import './App.css';

import { ThemeProvider } from './theme/components/ThemeProvider';

function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;