import React from 'react';
import './App.css';
import './template/custom.css'
import Menu from './template/menu';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUndo, faCheck, faTrash, faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faUndo, faCheck, faTrash, faPlus, faSearch, faTimes)

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
