"use client";

import React, { useState, useEffect } from "react";
import { User } from "./mockData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchAllUsers } from "@/requests/users";

const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // Fetch all users
    fetchAllUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <Header isAuthenticated={true} />
      <div className="py-24 px-12 md:px-24 lg:px-48">
        {/* Page Header */}
        {/* <h1 className="text-4xl font-bold text-center mb-8">All Users</h1> */}
        <p className="text-center mb-12 text-gray-600">
          A list of all the registered users on Sabka Munch.
        </p>

        {/* User Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user: User) => (
            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-200 p-6"
            >
              {/* User Name */}
              <h2 className="text-xl font-semibold mb-2">{user.name}</h2>

              {/* User Email */}
              <p className="text-gray-700 text-sm mb-2">
                <strong>Email: </strong>
                {user.email}
              </p>

              {/* User Bio */}
              <p className="text-gray-600 mb-4">
                <strong>Bio: </strong>
                {user.bio.length > 80
                  ? `${user.bio.substring(0, 80)}...`
                  : user.bio}
              </p>

              {/* User Role */}
              <p className="text-sm text-gray-500 mb-4">
                <strong>Role: </strong>
                {user.role}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UsersPage;
