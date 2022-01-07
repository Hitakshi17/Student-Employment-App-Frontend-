import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Home from './Pages/Home';
import CompanyView from "./Pages/CompanyView"
import StudentView from "./Pages/StudentView"



function App() {
  return (
    <div>
        <BrowserRouter>
          <HeaderComponent />
            <div className="container">    
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
              <Routes>
                <Route exact path="/student" element={<StudentView />} />
              </Routes>
              <Routes>
                <Route exact path="/company" element={<CompanyView />} />
              </Routes>
            </div>
          <FooterComponent />
        </BrowserRouter>
    </div>
    
  );
}

export default App;