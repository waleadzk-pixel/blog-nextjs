import posts from "@/data/posts.json";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(post), { status: 200 });
}
