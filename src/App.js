import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/Landing'
import LoginPage from './pages/LoginForm';
import RegistrationPage from './pages/RegistrationForm';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/sign_up' element={<RegistrationPage />}/>
      </Routes>
    </>
  );
}

export default App;
