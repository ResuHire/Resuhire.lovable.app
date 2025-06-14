
import React from 'react';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ResuHire
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing recruitment by merging HrTech, EduTech & AI. 
              From students to warriors, we're building the future of hiring.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-purple-600 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-purple-600 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-purple-600 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-purple-600 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Hackathons</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">FAANG Internships</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Startup Jobs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">For Recruiters</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-purple-600 transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Find Talent</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">AI Matching</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-purple-600 transition-colors">Partnerships</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © 2024 ResuHire. All rights reserved. We don't believe in resumes to get hired.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
