import React from 'react';
import './App.css';
import Header from './components/Header';
import CampaignList from './components/CampaignList';

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header />
      
      {/* List of campaign cards */}
      <CampaignList />
    </div>
  );
}

export default App;
