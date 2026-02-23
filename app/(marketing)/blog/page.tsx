import { allPosts } from "contentlayer/generated";

export default function BlogPage() {
  const posts = allPosts;
  console.log(allPosts);
  return (
    <div>
      <div>Blog Page</div>
    </div>
  );
}
