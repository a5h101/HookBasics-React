import React, { useState } from 'react';
import './App.css';
import UseState from './components/UseState';

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <div className="container">
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseState />
      </ToggleTheme.Provider>
    </div>
  );
}

export default App;
