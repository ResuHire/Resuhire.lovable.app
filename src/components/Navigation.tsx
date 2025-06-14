
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, Target, Users, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ResuHire
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-purple-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-purple-600 transition-colors">
              How It Works
            </a>
            <a href="#training" className="text-foreground hover:text-purple-600 transition-colors">
              Training
            </a>
            <a href="#jobs" className="text-foreground hover:text-purple-600 transition-colors">
              Jobs
            </a>
            <Button variant="outline">Sign In</Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-purple-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-purple-600 transition-colors">
                How It Works
              </a>
              <a href="#training" className="text-foreground hover:text-purple-600 transition-colors">
                Training
              </a>
              <a href="#jobs" className="text-foreground hover:text-purple-600 transition-colors">
                Jobs
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Sign In</Button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                  Get Started
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
