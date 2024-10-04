// api/auth/register.ts
import bcrypt from 'bcrypt';
import User from '@/models/User';
import { connectToDatabase } from '@/lib/monogodb';

export async function POST(req: Request) {
  await connectToDatabase();
  const { email, password, name, bio, role } = await req.json();
  if (!name ||!email || !bio || !password) {
    return Response.json({ error: 'Please provide all required fields' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({ email, password: hashedPassword, name, bio, role });
    return Response.json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    return Response.json({ message: 'Error registering user', error });
  }
}