
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/monogodb';
import User from '@/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { id } = req.query;

  if (req.method === 'GET') {
    // Fetch a single user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
