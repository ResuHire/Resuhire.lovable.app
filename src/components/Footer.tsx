
import React from 'react';
import { Building, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">ResuHire</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              The comprehensive EduTech × HrTech ecosystem revolutionizing how talent is discovered, 
              developed, and deployed across the global economy.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* For Talent */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">For Talent</h4>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/application-process" className="hover:text-orange-600 transition-colors">Application Process</Link></li>
              <li><Link to="/program-structure" className="hover:text-orange-600 transition-colors">Program Structure</Link></li>
              <li><Link to="/success-stories" className="hover:text-orange-600 transition-colors">Success Stories</Link></li>
              <li><Link to="/career-outcomes" className="hover:text-orange-600 transition-colors">Career Outcomes</Link></li>
              <li><Link to="/alumni-network" className="hover:text-orange-600 transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">For Companies</h4>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/partner-program" className="hover:text-orange-600 transition-colors">Partner Program</Link></li>
              <li><Link to="/talent-pipeline" className="hover:text-orange-600 transition-colors">Talent Pipeline</Link></li>
              <li><Link to="/hiring-solutions" className="hover:text-orange-600 transition-colors">Hiring Solutions</Link></li>
              <li><Link to="/custom-programs" className="hover:text-orange-600 transition-colors">Custom Programs</Link></li>
              <li><Link to="/analytics-dashboard" className="hover:text-orange-600 transition-colors">Analytics Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 ResuHire. Transforming careers, one talent at a time.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
