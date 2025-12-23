import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "How it works", to: "/how-it-works" },
    { label: "All apps", to: "/all-apps" },
    { label: "Pricing", to: "/pricing" },
    { label: "For Teams", to: "/for-teams" },
    { label: "Blog", to: "/blog" },
    { label: "Podcast", to: "/podcast" },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 bg-dark text-white z-50">
        <div className="px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between gap-6 max-w-full">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0 inline-flex"
              aria-label="Go to homepage"
            >
              <img
                src="/src/assets/images/logo.svg"
                alt="Logo"
                className="h-7 md:h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-5 flex-1 justify-end ml-12">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-medium tracking-nav text-white hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Divider per Figma */}
            <div className="hidden md:block h-5 w-px bg-white opacity-80 mx-2" />

            {/* Desktop CTAs - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-5">
              <img
                src="/src/assets/images/nav-us-flag.svg"
                alt="US Flag"
                className="h-4 w-auto"
              />
              <Link
                to="/sign-in"
                className="text-sm font-medium tracking-nav text-white hover:text-gray-300 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/try-free"
                className="text-sm font-normal tracking-nav border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-dark transition-colors"
              >
                Try free
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-dark border-b border-gray-700 z-40">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium tracking-nav text-white hover:text-gray-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-gray-700 pt-4 mt-2 space-y-3">
              <Link
                to="/sign-in"
                className="w-full inline-flex text-sm font-medium tracking-nav text-white hover:text-gray-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/try-free"
                className="w-full inline-flex justify-center text-sm font-medium tracking-nav bg-white text-dark px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
