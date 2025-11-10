import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Contests from './pages/Contests';
import Leaderboard from './pages/Leaderboard';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Practice from './pages/Practice';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Compiler from './pages/compiler';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/practice" element={<Practice />} />
              {/* <Route path="/compiler" element={<Compiler />} /> */}
              <Route path="/contests" element={<Contests />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
