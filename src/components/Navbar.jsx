import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';

  const handleLogout = async () => {
    try {
      // call backend to clear cookie
      await fetch(`${API}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });
    } catch (err) {
      console.error('Error calling logout endpoint', err);
    }
    // clear client state and redirect home
    logout();
    navigate('/');
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg z-50 shadow-lg dark:shadow-neutral-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl group-hover:scale-110 transition-transform duration-300 ease-out overflow-hidden shadow-lg">
              <img src="/1.png" alt="logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent tracking-tight">
              D-Coder
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
              Home
            </Link>
            <Link to="/contests" className="px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
              Contests
            </Link>
            <Link to="/practice" className="px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
              Practice
            </Link>
            <Link to="/leaderboard" className="px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
              Leaderboard
            </Link>
            <Link to="/about" className="px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
              About
            </Link>
            <Link to="/contact" className="px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 hover:shadow-lg hover:shadow-neutral-500/10"
            >
              {isDark ? 
                <Sun className="w-5 h-5 text-accent-500" /> : 
                <Moon className="w-5 h-5 text-primary-500" />
              }
            </button>

            {user ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to={user.role === 'admin' ? '/admin' : '/dashboard'}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-200"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border-2 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 border-2 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
            >
              {mobileMenuOpen ? 
                <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" /> : 
                <Menu className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              }
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">Home</Link>
            <Link to="/contests" className="block px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">Contests</Link>
            <Link to="/practice" className="block px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">Practice</Link>
            <Link to="/leaderboard" className="block px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">Leaderboard</Link>
            <Link to="/about" className="block px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">About</Link>
            <Link to="/contact" className="block px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">Contact</Link>
            
            <div className="border-t border-neutral-200 dark:border-neutral-800 my-4"></div>
            
            {user ? (
              <div className="space-y-1">
                <Link 
                  to={user.role === 'admin' ? '/admin' : '/dashboard'} 
                  className="block px-4 py-2.5 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="w-full text-left px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link 
                  to="/login" 
                  className="block px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-4 py-2.5 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
