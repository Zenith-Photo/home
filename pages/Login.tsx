import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User as UserIcon, AlertCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Login: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/admin');
    } else {
      setError('認証情報が正しくありません。');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <ScrollReveal>
        <div className="w-full max-w-md bg-[#0a0a0a] p-12 border border-white/5 shadow-2xl rounded-sm">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif mb-2 tracking-tight">Management</h1>
            <p className="text-gray-500 text-[10px] tracking-[0.5em] uppercase">Zenith Photo Admin</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-sm text-sm border border-red-400/20 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500">Username</label>
              <div className="relative group">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-white transition-colors" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/40 transition-all"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-white transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/40 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-4 font-bold tracking-[0.3em] uppercase hover:bg-gray-200 transition-all rounded-sm text-xs mt-4"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-10 text-center">
            <p className="text-[10px] text-gray-600 tracking-widest uppercase">
              Authorized personnel only
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Login;