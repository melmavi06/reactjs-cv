// src/App.js
import React from 'react';
import KisiselBilgiler from './components/KisiselBilgiler';
import Egitim from './components/Egitim';
import IsDeneyimi from './components/IsDeneyimi';
import Yetenekler from './components/Yetenekler';
import Hobiler from './components/Hobiler';
import Referanslar from './components/Referanslar';
import SosyalLinkler from './components/SosyalLinkler';
import './App.css';

const App = () => {
  return (
    <div className="cv-container">
      <KisiselBilgiler />
      <Egitim />
      <IsDeneyimi />
      <Yetenekler />
      <Hobiler />
      <Referanslar />
      <SosyalLinkler />
    </div>
  );
};

export default App;
