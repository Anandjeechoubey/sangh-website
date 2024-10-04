import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/monogodb';
import Post from '@/models/Post';

export async function GET() {
  await connectToDatabase();
  
  const posts = await Post.find({});
  // res.send(posts);
  return Response.json(posts);
}

export async function POST(req: any) {
  await connectToDatabase();

  const { title, description, content, author } = await req.json()
  
  // Create a new post

  if (!title || !description || !content || !author) {
    return Response.json({ error: 'Please provide all required fields' });
  }

  const newPost = new Post({ title, description, content, author });
  await newPost.save();
  return Response.json(newPost);
}
