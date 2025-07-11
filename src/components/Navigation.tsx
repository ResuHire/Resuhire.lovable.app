
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/programs', label: 'Programs' },
    { href: '/companies', label: 'Companies' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-700 transition-colors">
              <Zap className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-gray-900">ResuHire</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                    isActive(item.href)
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium">
                Sign In
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 font-medium rounded-lg">
                Apply Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 rounded-b-lg shadow-lg">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-6 py-3 font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 px-6 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="justify-start text-gray-600 hover:text-gray-900">
                  Sign In
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white justify-start rounded-lg">
                  Apply Now
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
