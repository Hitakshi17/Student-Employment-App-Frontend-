import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Home from './Pages/Home';
import CompanyView from "./Pages/CompanyView"
import StudentView from "./Pages/StudentView"
import ViewStudentDetails from './Pages/ViewStudentDetails';
import SelectedBy from './Pages/SelectedBy';
import ViewCompanyDetails from './Pages/ViewCompanyDetails';
import SelectedStudent from './Pages/SelectedStudent';
import Contact from './Pages/contact';
import About from './Pages/about';
import Login from './Pages/login';
import Form from './components/chatbot/form';
import bot from '../src/bot.png'
import Register from './Pages/register';
import Register2 from './Pages/register2';

const App = (props) => {

  let [showChat, setShowChat] = useState(false);
  const startChat = () => { setShowChat(true); }
  const hideChat = () => { setShowChat(false); }
  return (
    <>
      <div className='bot'>
        <div style={{ display: showChat ? "" : "none" }}>
          <Form />
        </div>
        <div>
          {!showChat
            ? <button class="btn2 rounded-pill " onClick={() => startChat()}><img src={bot} alt='' height={50} /></button>
            : <button class='btn2 rounded-pill' onClick={() => hideChat()}>click to hide...</button>
          }
        </div>
      </div>

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
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/Signup" element={<Register />} />
              <Route exact path="/Signup2" element={<Register2 />} />

            </Routes>

          </div>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;