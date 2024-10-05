// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated } from '@/lib/jwtTokenControl'

const JWT_SECRET = process.env.JWT_SECRET || '';

// Middleware function
export async function middleware(request: NextRequest) {
  console.log('middleware', request);
  const result = await isAuthenticated(request)
  console.log('middleware-res', result);
  if (!result) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next();
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
