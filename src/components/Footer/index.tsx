import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container px-12 md:px-24 lg:px-48 flex flex-col md:flex-row justify-between w-full">
        {/* Brand / Website Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Sabka Munch</h2>
          <p className="mt-2 text-gray-900">
            Your go-to platform to explore, create, and share amazing content.
            Stay curious, stay hungry!
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="text-gray-900 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-900 hover:text-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-700"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/create-blog"
                className="text-gray-900 hover:text-gray-700"
              >
                Create Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold">Follow Us</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="text-gray-900 hover:text-gray-700"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-gray-900 hover:text-gray-700"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-gray-900 hover:text-gray-700"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Sabka Munch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
