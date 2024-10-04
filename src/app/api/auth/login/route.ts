// api/auth/login.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/monogodb';
import { NextResponse } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || '';


export async function POST(req: Request) {
    await connectToDatabase();
    const { email, password} = await req.json();
    if (!email || !password) {
        return Response.json({ error: 'Please provide all required fields' });
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return Response.json({ message: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: 'Password mismatch' }, { status: 400 });
        //   .json({ message: 'Invalid credentials' });
        }
    
        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
          expiresIn: '1h',
        });

        return Response.json({ message: 'Login successful', token });
    } catch (error) {
        return Response.json({ message: 'Error registering user', error });
    }
  
}