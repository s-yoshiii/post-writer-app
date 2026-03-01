import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Mdx from "@/components/mdx-component";
import { siteConfig } from "@/config/site";

async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPostFromSlug(slug);
  if (!page) {
    return {};
  }
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      locale: "ja",
      url: `${siteConfig.url}${page.url}`,
      title: page.title,
      description: page.description,
      siteName: siteConfig.name,
      images: page.image ? [page.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: page.image ? [page.image] : undefined,
      creator: "s.yoshiii",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostFromSlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      {post.date && <time>Published on {format(post.date, "yyyy/MM/dd")}</time>}
      <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          className="my-8 border rounded-md bg-muted"
          alt={post.title}
          width={720}
          height={486}
        />
      )}
      <div>
        <Mdx code={post.body.code} />
      </div>
      <hr className="mt-12" />
      <div className="py-6 text-center lg:py-10">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          全てを見る
        </Link>
      </div>
    </article>
  );
}
