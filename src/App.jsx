import ProtectedRoute from './routes/ProtectedRoute';
import AuthProvider from './hooks/AuthProvider';
import LandingPage from './pages/LandingPage';
import GoalPage from './pages/GoalPage';
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar';
import {ROLES} from './assets/constants'


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <main className="container">
        <AuthProvider>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/goals" element={<GoalPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              {/* <Route
                path="/profile"
                element={<ProtectedRoute role={ROLES.User} />}
              >
                <ProfilePage />
              </Route> */}
          </Routes>
          </AuthProvider>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App
