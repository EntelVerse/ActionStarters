"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search, X, User, Users } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#1a2353] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold">ScienceCompete</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/grants" className="text-white hover:text-blue-300 transition-colors">
              Grants
            </Link>
            <Link href="/awards" className="text-white hover:text-blue-300 transition-colors">
              Awards
            </Link>
            <Link href="/funding" className="text-white hover:text-blue-300 transition-colors">
              Funding
            </Link>
            <Link href="/conferences" className="text-white hover:text-blue-300 transition-colors">
              Conferences
            </Link>
            <Link href="/researchers" className="text-white hover:text-blue-300 transition-colors">
              Researchers
            </Link>
            <Link href="/teams" className="text-white hover:text-blue-300 transition-colors">
              Teams
            </Link>
            <Link href="/archive" className="text-white hover:text-blue-300 transition-colors">
              Archive
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="icon" className="text-white border-white hover:bg-blue-700">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-white hover:bg-blue-700">
              <Link href="/profile">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a2353] border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/grants"
              className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Grants
            </Link>
            <Link
              href="/awards"
              className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Awards
            </Link>
            <Link
              href="/funding"
              className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Funding
            </Link>
            <Link
              href="/conferences"
              className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Conferences
            </Link>
            <Link
              href="/researchers"
              className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Researchers
            </Link>
            <Link
              href="/teams"
              className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Teams
            </Link>
            <Link
              href="/archive"
              className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Archive
            </Link>
            <Link
              href="/profile"
              className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Profile
            </Link>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full text-white border-white hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
