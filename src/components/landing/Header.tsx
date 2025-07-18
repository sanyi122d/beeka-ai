import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                B
              </span>eeka AI
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block"></div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin" className="text-gray-300 hover:text-white transition-colors">Sign In</Link>
            <button
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              onClick={() => navigate('/signup')}
            >
              Sign Up Free
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="border-t border-gray-800 pt-4">
                <Link to="/signin" className="block px-3 py-2 text-gray-300 hover:text-white">Sign In</Link>
                <button
                  className="w-full mt-2 bg-white text-black px-6 py-2 rounded-full font-medium"
                  onClick={() => { setIsMenuOpen(false); navigate('/signup'); }}
                >
                  Sign Up Free
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 