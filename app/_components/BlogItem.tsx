import { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";

function BlogItem({ post }: { post: BlogPost }) {
  return (
    <li
      key={post.id}
      className="border border-slate-700 rounded-lg shadow-lg overflow-hidden"
    >
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Link
          href={`/blog/${post.slug}`}
          className="text-xl font-semibold text-blue-400 hover:underline"
        >
          {post.title}
        </Link>
        <p className="text-gray-600 mt-1">{post.content.slice(0, 60)}...</p>
      </div>
    </li>
  );
}

export default BlogItem;
