import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Menu, X, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// カスタムロゴコンポーネント: カメラの絞りをモチーフにしたデザイン
const ZenithLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg 
    viewBox="0 0 32 32" 
    className={`${className} transition-transform duration-700 group-hover:rotate-180`}
    fill="none" 
    xmlns="https://raw.githubusercontent.com/Zenith-Photo/home/128d1f7720a88a035be4c116719a75f4099299fb/public/icon.svg"
  >
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M16 2L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 24L16 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 16L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 16L30 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 6L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21.5 21.5L26 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M26 6L21.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10.5 21.5L6 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'GALLERY', path: '/gallery' },
  ];

  if (user) {
    navLinks.push({ name: 'ADMIN', path: '/admin' });
  }

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <ZenithLogo className="w-9 h-9 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-serif tracking-[0.2em] text-white leading-none">ZENITH</span>
                <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase mt-1">Photo Archive</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-white p-2 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              ) : (
                <Link to="/login" className="text-gray-400 hover:text-white p-2">
                  <User className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium tracking-widest border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            {user && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-red-400 hover:text-red-300 block w-full text-left px-3 py-4 text-base font-medium tracking-widest"
              >
                LOGOUT
              </button>
            )}
            {!user && (
               <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium tracking-widest"
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
