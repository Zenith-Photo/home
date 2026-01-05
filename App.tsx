import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.tsx';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Login from './pages/Login.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import ScrollReveal from './components/ScrollReveal.tsx';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const Footer: React.FC = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <ScrollReveal>
        <h2 className="text-2xl font-serif mb-8 tracking-widest uppercase">ZENITH PHOTO</h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="flex justify-center space-x-12 mb-12">
          <a href="https://youtube.com/@zenith_jpchannel" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">YouTube</a>
          <a href="#" className="text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">Twitter</a>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <p className="text-gray-600 text-xs tracking-widest">&copy; {new Date().getFullYear()} Zenith Photo Archive. All Rights Reserved.</p>
      </ScrollReveal>
    </div>
  </footer>
);

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;