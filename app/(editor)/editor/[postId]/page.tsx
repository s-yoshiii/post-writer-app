import Editor from "@/components/editor";
import { db } from "@/lib/db";
import { Post, User } from "@/lib/generated/prisma";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
  return post;
}

interface EditorPageProps {
  params: Promise<{ postId: string }>;
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  const userId = user?.id;

  const { postId } = await params;
  const post = await getPostForUser(postId, userId);

  if (!post) {
    redirect("/dashboard");
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  );
}
