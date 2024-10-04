"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { blogPosts } from "./mockData";
import { BlogPost } from "./types";
import Link from "next/link";

const HomePage = () => {
  // Sample state to check authentication
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      {/* Pass the authentication state to the Header */}
      <Header isAuthenticated={isAuthenticated} />
      <main className="py-24 px-12 md:px-24 lg:px-48 min-h-screen">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Sabka Munch!
        </h1>
        <p className="text-center m-4 text-gray-600">
          A place where everyone can share their thoughts and read amazing
          blogs!
        </p>
        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post: BlogPost) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              {/* Blog Title */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

                {/* Blog Description */}
                <p className="text-gray-700 text-sm mb-4">
                  {post.description.length > 100
                    ? `${post.description.substring(0, 100)}...`
                    : post.description}
                </p>

                {/* Blog Metadata */}
                <div className="text-sm text-gray-500 mb-4">
                  <span>By {post.author}</span> | <span>{post.date}</span>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
