import { Provider } from 'react-redux';
import Router from './Router';

import './App.css';
import { ThemeProvider } from './theme/components/ThemeProvider';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;