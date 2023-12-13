import fs from "fs";
import Link from "next/link";
import Card from "@/components/Card";
import matter from "gray-matter";
import { postMetadata } from "@/components/postMetadata";
const getPostsMetadata = (): postMetadata[] => {
  const files = fs.readdirSync("posts/");
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      image: matterResult.data.image,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

const Page = () => {
  const postsMetadata = getPostsMetadata();
  const postPreviews = postsMetadata.map((post) => (
    <div className=""  key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h1 className="text-3xl">{post.title}</h1>
        <img height={90} width={90} src={post.image} alt="" />
        <h3 className="text-blue-400">
          {post.subtitle}
        </h3>
        <h6 className="text-orange-400">
          {post.date}
        </h6>
        
      </Link>
    </div>
  ));
  return (
    <main className="main h-full w-full bg-black text-white">
      <div>{postPreviews}</div>
    </main>
  );
};

export default Page;
