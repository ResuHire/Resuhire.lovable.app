
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home', emoji: '🏠' },
    { href: '/features', label: 'Features', emoji: '⚡' },
    { href: '/how-it-works', label: 'How It Works', emoji: '🛠️' },
    { href: '/programs', label: 'Programs', emoji: '🎓' },
    { href: '/companies', label: 'Companies', emoji: '🏢' },
    { href: '/about', label: 'About', emoji: '💫' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-purple-100 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with gradient */}
          <Link to="/" className="flex items-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform glow-effect">
              <Zap className="text-white font-bold text-lg w-6 h-6" />
            </div>
            <span className="text-2xl font-black gradient-text">ResuHire</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-600 hover:text-purple-600 font-bold">
                Sign In 🔑
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 font-bold rounded-xl shadow-lg card-hover">
                Apply Now 🚀
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-purple-100 text-purple-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100 rounded-b-3xl shadow-2xl">
            <div className="py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-3 text-lg font-bold px-6 py-4 rounded-2xl mx-4 transition-all ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 px-4 pt-6 border-t border-purple-100 mt-6">
                <Button variant="ghost" className="justify-start text-lg font-bold text-gray-600">
                  🔑 Sign In
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white justify-start text-lg font-bold rounded-xl shadow-lg">
                  🚀 Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
