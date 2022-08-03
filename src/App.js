import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import IsPrivateAndNoProfile from './components/IsPrivateAndNoProfile';
import CreateProfilePage from './pages/CreateProfilePage';
import MomsPage from './pages/MomsPage';
import IsPrivateAndHasProfile from './components/IsPrivateAndHasProfile';
import EditProfilePage from './pages/EditProfilePage'
import ProfileDetailsPage from './pages/ProfileDetailsPage'



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/create-profile"
          element={<IsPrivateAndNoProfile><CreateProfilePage /></IsPrivateAndNoProfile>}
        />

        <Route
          path="/users"
          element={<IsPrivateAndHasProfile><MomsPage /></IsPrivateAndHasProfile>}
        />

        <Route
          path="/myprofile"
          element={<IsPrivateAndHasProfile><EditProfilePage /></IsPrivateAndHasProfile>}
        />
        
        <Route 
        path="/individual-Profile"
        element={ <IsPrivateAndHasProfile><ProfileDetailsPage /></IsPrivateAndHasProfile>}
        />


        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />




      </Routes>

    </div>
  );
}

export default App;
