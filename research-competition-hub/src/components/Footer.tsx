import Link from "next/link";
import { Facebook, Twitter, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a2353] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CONTACT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:contact@sciencecompete.com" className="hover:text-blue-300 transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@sciencecompete.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CATEGORIES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/grants" className="hover:text-blue-300 transition-colors">
                  Grants
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-blue-300 transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link href="/funding" className="hover:text-blue-300 transition-colors">
                  Funding
                </Link>
              </li>
              <li>
                <Link href="/conferences" className="hover:text-blue-300 transition-colors">
                  Conferences
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">REGIONS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/regions/north-america" className="hover:text-blue-300 transition-colors">
                  North America
                </Link>
              </li>
              <li>
                <Link href="/regions/europe" className="hover:text-blue-300 transition-colors">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="/regions/asia" className="hover:text-blue-300 transition-colors">
                  Asia
                </Link>
              </li>
              <li>
                <Link href="/regions/global" className="hover:text-blue-300 transition-colors">
                  Global
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SOCIAL</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/sciencecompete" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com/sciencecompete" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com/company/sciencecompete" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://github.com/sciencecompete" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-700 pt-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} ScienceCompete. All rights reserved.
          </p>
          <p className="text-center text-sm mt-2">
            <Link href="/privacy-policy" className="hover:text-blue-300 transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/terms-of-service" className="hover:text-blue-300 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
