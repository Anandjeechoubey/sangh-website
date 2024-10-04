// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '';

// Middleware function
export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  console.log("token: ", token);

  // Check if the token exists
  if (!token) {
    // If no token, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify the JWT token
    jwt.verify(token, JWT_SECRET);
    // If verification is successful, allow the request to continue
    return NextResponse.next();
  } catch (error) {
    console.error('JWT verification failed:', error);
    // If the token is invalid, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Specify the routes to apply the middleware to
export const config = {
  matcher: [
    '/dashboard/:path*', // Protect all routes under /dashboard
    '/create',           // Protect /create page
    '/users',            // Protect the /users page
    '/api/posts/:path*', // Protect all posts-related API routes
  ],
};
