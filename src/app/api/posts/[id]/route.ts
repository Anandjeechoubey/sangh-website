import { connectToDatabase } from '@/lib/monogodb';
import Post from '@/models/Post';

export async function GET(req: Request, 
  context: { params: { id: string } }) {
  await connectToDatabase();

  const { id } = context.params;

  const post = await Post.findById(id);
  if (!post) {
    return Response.json({ message: 'Post not found' });
  }
  return Response.json(post);
}