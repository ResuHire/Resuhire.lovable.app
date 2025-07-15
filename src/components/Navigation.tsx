
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/events', label: 'Events' },
    { href: '/careers', label: 'Careers' },
    { href: '/resources', label: 'Resources' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - clean and simple like Iterative */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">resuhire</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-600 hover:text-gray-900 font-normal transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 text-sm">
                Demo Day
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6">
                Apply for Summer 2025
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block font-medium px-4 py-2 ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="justify-start text-gray-600 text-sm">
                  Demo Day
                </Button>
                <Button className="bg-blue-600 text-white justify-start text-sm">
                  Apply for Summer 2025
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
