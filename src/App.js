import React from 'react';

// Material
import '@material/typography/dist/mdc.typography.min.css';
import '@material/elevation/dist/mdc.elevation.css';

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// App
import './App.css';

// Pages
import HomePage from './pages/index.js';
// import DemosPage from './pages/demos';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      {/* <DemosPage /> */}
      <HomePage />
    </div>
  );
}

export default App;
