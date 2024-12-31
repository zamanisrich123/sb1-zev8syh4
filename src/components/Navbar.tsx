import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Server } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">RDPro</span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-blue-500 transition-colors">
                About
              </Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="hover:text-blue-500 transition-colors">
                    Dashboard
                  </Link>
                  <button
                    onClick={signOut}
                    className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              About
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={signOut}
                  className="w-full text-left px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}