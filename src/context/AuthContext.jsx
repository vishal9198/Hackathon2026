import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check auth status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch(`${API}/api/auth/check`, {
        credentials: 'include'
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
        setIsAdmin(data.isAdmin || false);
      }
    } catch (err) {
      console.error('Auth check failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password, role = 'user') => {
    try {
      const endpoint = role === 'admin' ? `${API}/api/admin/login` : `${API}/api/auth/login`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setUser(data);
      setIsAdmin(role === 'admin');
      return { success: true };
    } catch (err) {
      console.error('Login error:', err);
      return { 
        success: false, 
        error: err.message || 'Login failed, please try again'
      };
    }
  };

  const signup = async (userData) => {
    try {
      const res = await fetch(`${API}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(userData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      setUser(data);
      setIsAdmin(false);
      return { success: true };
    } catch (err) {
      console.error('Signup error:', err);
      return { 
        success: false, 
        error: err.message || 'Signup failed, please try again'
      };
    }
  };

  const logout = async () => {
    try {
      const endpoint = isAdmin ? `${API}/api/admin/logout` : `${API}/api/auth/logout`;
      await fetch(endpoint, {
        method: 'POST',
        credentials: 'include'
      });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      setIsAdmin(false);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const res = await fetch(`${API}/api/auth/update-profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(profileData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Profile update failed');
      }

      setUser(prev => ({ ...prev, ...data }));
      return { success: true };
    } catch (err) {
      console.error('Profile update error:', err);
      return { 
        success: false, 
        error: err.message || 'Profile update failed, please try again'
      };
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAdmin, 
        login, 
        logout, 
        signup, 
        updateProfile,
        checkAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
