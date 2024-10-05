"use client";
import React from "react";
import Link from "next/link";
import { useUserData } from "@/hooks/useUserData";

type HeaderProps = {
  isAuthenticated: boolean;
};

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  const user = useUserData();

  console.log("In header, user data:", user);
  return (
    <header className="bg-white shadow-md py-4 px-12 md:px-24 lg:px-48 flex justify-between items-center">
      {/* Logo / Website Name */}
      <Link href="/" className="text-2xl font-bold text-blue-500">
        Sabka Munch
      </Link>

      {/* Navigation Options */}
      <nav className="flex space-x-4">
        {isAuthenticated ? (
          <>
            <Link
              href="/users"
              className="font-bold px-4 py-2 rounded-md transition duration-200 hover:bg-slate-50"
            >
              Users
            </Link>
            <Link href={"/create"}>
              <button className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded">
                Create
              </button>
            </Link>
          </>
        ) : (
          <Link href={"/login"}>
            <button className="text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 px-4 py-2 rounded">
              Login
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
