import React, { PureComponent } from 'react';
import '@material/typography/dist/mdc.typography.min.css';
import './App.css';
import HomePage from './pages/index.js';
// import DemosPage from './pages/demos';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        {/* <DemosPage /> */}
        <HomePage />
      </div>
    );
  }
}

export default App;
