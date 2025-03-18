import { getTranslations } from "next-intl/server";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await fetch("https://api.vercel.app/blog")
  const posts: Post[] = await data.json();
  
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = await getTranslations("BlogPage");
  const { id } = await params;
  const data = await fetch(`https://api.vercel.app/blog/${id}`)
  const post: Post = await data.json()
  
  return (
    <div className="flex flex-col gap-y-20 w-full items-center justify-center">
      <h1 className="text-3xl font-bold mt-20">{t("title")}</h1>
      <div className="flex flex-col">
        <h1>{post.category}</h1>
        <h1>
          {post.title} by {post.author}
        </h1>
        <h1>on {post.date}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
  