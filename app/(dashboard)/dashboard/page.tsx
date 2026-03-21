import DashboardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostCreateButton from "@/components/post-create-button";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  const post = await db.post.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  console.log(post);
  return (
    <DashBoardShell>
      <DashboardHeader heading="記事投稿" text="記事の作成と管理">
        <PostCreateButton />
      </DashboardHeader>
    </DashBoardShell>
  );
}
