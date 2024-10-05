import * as jose from 'jose'
import { NextRequest } from 'next/server';
import Cookies from 'js-cookie';

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.JWT_SECRET),
}

export const isAuthenticated = async (req: NextRequest) => {
const token = req.cookies.get('auth-token')?.value;

  if (token) {
    try {

      const decoded = await jose.jwtVerify(token, jwtConfig.secret)

      if (decoded.payload?.id) {
        return true
      } else {
        return false
      }
    } catch (err) {
      console.error('Authentication error: ', err)

      return false
    }
  } else {
    return false
  }
}

export const isAdmin = async (req: NextRequest) => {
    const token = req.cookies.get('auth-token')?.value;
    
    if (token) {
        try {

            const decoded = await jose.jwtVerify(token, jwtConfig.secret)

            if (decoded.payload?.role === 'Admin') {
                return true
            } else {
                return false
            }
        } catch (err) {
            console.error('Authentication error: ', err)

            return false
        }
    } else {
        return false
    }
}

export function getUserEmailFromToken() {
    const email = Cookies.get('email');
    console.log("email", email)
    return email;
  }