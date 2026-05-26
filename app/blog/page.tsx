import { BlogPost } from "@/types";
import BlogItem from "../_components/BlogItem";

async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array to prevent crashing
  }
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main>
      <section className="py-4 lg:py-12">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl text-white font-bold mb-6">
            Explore Our Blog
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
