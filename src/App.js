import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import IsPrivate from './components/IsPrivate';
import ProfilePage from './pages/ProfilePage';
import IsPrivateAndNoProfile from './components/IsPrivateAndNoProfile'




function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path="/" element={<IsPrivateAndNoProfile><HomePage/></IsPrivateAndNoProfile>} />

      <Route
      path="/profile"
      element={ <IsPrivate><ProfilePage /></IsPrivate> }
      />

      <Route path="/signup" element={ <SignupPage /> } />
      <Route path="/login" element={ <LoginPage /> } />




      </Routes>

    </div>
  );
}

export default App;
