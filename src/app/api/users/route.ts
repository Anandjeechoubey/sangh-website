import { connectToDatabase } from '@/lib/monogodb';
import User from '@/models/User';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const users = await User.find({});
    return Response.json(users);
  } catch {
    return Response.json({ message: 'Server Error' });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { name, email, bio, role } = await req.json();

    if (!name ||!email || !bio || !role) {
      return Response.json({ error: 'Please provide all required fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ error: 'User with this email already exists' });
    }

    const newUser = new User({ name, email, bio, role });
    await newUser.save();
    return Response.json(newUser);
  } catch(err) {
    return Response.json({ message: 'Server Error', error: err });
  }
}
