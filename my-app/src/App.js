import React from "react";
import Uppernav from "./component/upperNav";
import Categ from "./component/categ";
import AdBanner from "./component/adbann";
*import Notb from "./component/prod2base";
import Footer from "./component/footer";
import LoginPage from "./page/login";
import Register from "./page/sign";
import AccountInfo from "./page/profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Uppernav />
                <Categ />
                <AdBanner />{" "}
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />

      {/*<Uppernav/>
      
      <Categ/>
      <AdBanner/>
      <div className=" flex items-center justify-center"><ProductList/></div>
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      
      <Notb/>
      </div>
     */}
      <AccountInfo />
    </div>
  );
}

export default App;
