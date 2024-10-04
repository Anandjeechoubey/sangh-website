// requests/posts/index.ts

export interface Post {
    _id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    date: Date;
  }
  
  // Function to get all posts
  export const fetchAllPosts = async (): Promise<Post[]> => {
    const response = await fetch('/api/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts: Post[] = await response.json();
    return posts;
  };
  
  // Function to get details of a single post by ID
  export const fetchPostById = async (id: string): Promise<Post> => {
    const response = await fetch(`/api/posts/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post with ID: ${id}`);
    }
    const post: Post = await response.json();
    return post;
  };
  
  // Function to create a new post
  export const createNewPost = async (newPost: Omit<Post, '_id' | 'date'>): Promise<Post> => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create a new post');
    }
  
    const createdPost: Post = await response.json();
    return createdPost;
  };
  