import { notFound } from "next/navigation";
import { blogPosts } from "@/app/mockData"; // Import the mock data
import { BlogPost } from "@/app/types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type BlogPostProps = {
  params: {
    id: string;
  };
};

const BlogPostPage = ({ params }: BlogPostProps) => {
  // Find the blog post by ID
  const post = blogPosts.find((p: BlogPost) => p.id === params.id);

  // Show a 404 page if the blog post is not found
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header isAuthenticated={true} />
      <div className="container mx-auto py-24 px-48 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">{post?.title}</h1>
        <div className="text-sm text-gray-500 mb-8">
          <span>By {post?.author}</span> | <span>{post?.date}</span>
        </div>
        <p className="text-lg text-gray-700 leading-7">{post?.description}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogPostPage;
