import React from 'react';
import upperNav from './component/upperNav';
import Uppernav from './component/upperNav';
import Navbar from './component/nav';
import Categ from './component/categ';
import AdBanner from './component/adbann';
import BestSeller from './component/products';


function App() {
  return (
    <div className="App">
      <Uppernav/>
      <Navbar/>
      <Categ/>
      <AdBanner/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">

      <BestSeller/>
      </div>
    </div>
  );
}

export default App;
