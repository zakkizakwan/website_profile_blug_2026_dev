import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: 'Beranda', link: '/' },
    { label: 'Tentang', link: '/tentang' },
    { label: 'Pengurus', link: '/pengurus' },
    { label: 'Artikel', link: '/artikel' },
    { label: 'Kontak', link: '/kontak' },
  ];

  return (
    <header className="w-full py-3 sticky top-0 z-50 bg-white shadow-[0_4px_12px_-2px_rgba(255,229,103,0.3)]">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="nav-logo.svg" alt="Logo BLUG" className="h-10 w-auto" />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-dark hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-center">
            <ul className="flex space-x-2 lg:space-x-4 lg:space-x-8">
              {navItems.map((item, index) => (
                <NavItems
                  key={index}
                  label={item.label}
                  link={item.link}
                  isActive={isActive(item.link)}
                />
              ))}
            </ul>
          </div>

          {/* OSC Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <OSCButton />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <MobileNavItem
                key={index}
                label={item.label}
                link={item.link}
                isActive={isActive(item.link)}
              />
            ))}
            <div className="pt-4">
              <OSCButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavItems = ({ label, link, isActive }) => {
  return (
    <li className="relative group">
      <Link
        to={link}
        className={`px-3 py-2 text-sm lg:text-base text-secondary-dark hover:text-primary transition-colors ${
          isActive ? 'font-bold' : 'font-medium'
        }`}
      >
        {label}
      </Link>
      <div
        className={`absolute left-0 right-0 mx-auto -bottom-1 bg-primary transition-all duration-300 h-0.5 ${
          isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
        }`}
      />
    </li>
  );
};

const MobileNavItem = ({ label, link, isActive }) => {
  return (
    <Link
      to={link}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'bg-primary-50 text-primary'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {label}
    </Link>
  );
};

const OSCButton = () => (
  <a
    href="/osc"
    target="_self"
    onClick={(e) => {
      e.preventDefault();
      window.location.href = '/osc';
    }}
    className="inline-flex items-center justify-center px-4 py-2 border-4 border-secondary-dark rounded-full text-sm lg:text-base font-bold text-secondary-dark bg-primary hover:bg-yellow-400 transition-all duration-300 hover:scale-105 whitespace-nowrap"
  >
    Daftar OSC 2025
  </a>
);

export default Header;
