import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/Landing'
import LoginPage from './pages/LoginForm';
import RegistrationPage from './pages/RegistrationForm';
import RegistrationPageFields from './pages/RegistrationFormFields';
import RegistrationPagePosition from './pages/RegistrationFormPosition';

import NewsFeedEmployee from './pages/Employees/NewsFeed';
import UserStoryEmployee from './pages/Employees/UserStory';
import ProfileEmployee from './pages/Employees/Profile';
import ProfileUpdateEmployee from './pages/Employees/ProfileUpdate'

import NewsFeedEmployer from './pages/Employers/NewsFeed';
import UserStoryEmployer from './pages/Employers/UserStory';
import ProfileEmployer from './pages/Employers/Profile';
import ProfileUpdateEmployer from './pages/Employers/ProfileUpdate'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NewsFeedEmployee />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/sign_up' element={<RegistrationPage />}/>

        <Route path='/sign_up/userfields' element={<RegistrationPageFields />}/>
        <Route path='/sign_up/userpositions' element={<RegistrationPagePosition />}/>

        {/* 
          //sign_up/userdetails
          //sign_up/userfields
          //sign_up/userpositions
        */}

        <Route path='/employee/newsfeed' element={<NewsFeedEmployee />}/>
        <Route path='/employee/userstory' element={<UserStoryEmployee />}/>
        <Route path='/employee/profile' element={<ProfileEmployee />}/>
        <Route path='/employee/profileupdate' element={<ProfileUpdateEmployee />}/>

        <Route path='/employer/newsfeed' element={<NewsFeedEmployer />}/>
        <Route path='/employer/userstory' element={<UserStoryEmployer />}/>
        <Route path='/employer/profile' element={<ProfileEmployer />}/>
        <Route path='/employer/profileupdate' element={<ProfileUpdateEmployer />}/>
      </Routes>
    </>
  );
}

export default App;
