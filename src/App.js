import React from 'react';

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Pages
import HomePage from './pages/index.js';
// import DemosPage from './pages/demos';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App w-full h-full">
      {/* <DemosPage /> */}
      <HomePage />
    </div>
  );
}

export default App;
