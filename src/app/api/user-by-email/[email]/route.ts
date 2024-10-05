
import { connectToDatabase } from '@/lib/monogodb';
import User from '@/models/User';
import { NextRequest } from 'next/server';


export async function GET(req: NextRequest, 
    context: { params: { email: string } }) {
    await connectToDatabase();

    const { email } = context.params;

    const user = await User.findOne({ email: email });
    if (!user) {
        return Response.json({ message: 'User not found' });
      }
    return Response.json(user);
  
}