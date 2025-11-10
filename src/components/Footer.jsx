import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
                <img src="/1.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                D-coder
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Master competitive programming with our comprehensive platform. Practice, compete, and climb the leaderboard.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/practice" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Practice</Link></li>
              <li><Link to="/contests" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Contests</Link></li>
              <li><Link to="/leaderboard" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Leaderboard</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">API Reference</a></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Support</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 CodeArena. All rights reserved. Built with passion for coders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
