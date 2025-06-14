
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ResuHire
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
          <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
