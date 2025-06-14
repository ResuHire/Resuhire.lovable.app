
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Building, Users, BookOpen, Briefcase } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">ResuHire</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <a href="#platform" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Platform
              </a>
              <a href="#programs" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Programs
              </a>
              <a href="#companies" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Companies
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                About
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-700">
                Sign In
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Apply Now
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
              <a href="#platform" className="block text-gray-700 hover:text-orange-600 font-medium px-4 py-2">
                Platform
              </a>
              <a href="#programs" className="block text-gray-700 hover:text-orange-600 font-medium px-4 py-2">
                Programs
              </a>
              <a href="#companies" className="block text-gray-700 hover:text-orange-600 font-medium px-4 py-2">
                Companies
              </a>
              <a href="#about" className="block text-gray-700 hover:text-orange-600 font-medium px-4 py-2">
                About
              </a>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white justify-start">
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
