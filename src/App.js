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
import ViewStudentDetails from './Pages/ViewStudentDetails';
import SelectedBy from './Pages/SelectedBy';
import ViewCompanyDetails from './Pages/ViewCompanyDetails';
import SelectedStudent from './Pages/SelectedStudent';



function App() {
  return (
    <div>
        <BrowserRouter>
          <HeaderComponent />
            <div className="container App">    

              <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/student" element={<StudentView />} />
                <Route exact path="/student/details" element={<ViewStudentDetails />} />
                <Route exact path="/student/selectedby" element={<SelectedBy />} />
                <Route exact path="/company" element={<CompanyView />} />
                <Route exact path="/company/details" element={<ViewCompanyDetails />} />
                <Route exact path="/company/selected" element={<SelectedStudent />} />
                
              </Routes>
              
            </div>
          <FooterComponent />
        </BrowserRouter>
    </div>
    
  );
}

export default App;