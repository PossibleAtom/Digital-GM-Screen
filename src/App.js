import React from 'react';
import './App.css';
import ModuleContainer from './js/components/organisms/module-container';

function App() {
  return (
    <div className="App">
        <ModuleContainer moduleName='Example Module Name'><div>Example Module Content</div></ModuleContainer>
    </div>
  );
}

export default App;
