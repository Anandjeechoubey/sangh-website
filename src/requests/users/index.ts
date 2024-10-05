// requests/users/index.ts

export interface User {
    _id: string;
    name: string;
    email: string;
    bio: string;
    role: string;
  }
  
  // Function to get all users
  export const fetchAllUsers = async (): Promise<User[]> => {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users: User[] = await response.json();
    return users;
  };
  
  // Function to get details of a single user by ID
  export const fetchUserById = async (id: string): Promise<User> => {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user with ID: ${id}`);
    }
    const user: User = await response.json();
    return user;
  };
  

  export async function fetchUserByEmail(email: string) {
    const response = await fetch(`/api/user-by-email/${email}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch user details');
    }
  }