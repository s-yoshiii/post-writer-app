"use client";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { VariantProps } from "class-variance-authority";
import { useState } from "react";
import { Icon } from "./icon";
import * as React from "react";
import { useRouter } from "next/navigation";

interface PostCreateButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
export default function PostCreateButton({
  className,
  variant,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleCreate = async () => {
    setIsLoading(true);
    const response = await fetch("api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Post",
      }),
    });
    setIsLoading(false);
    if (!response.ok) {
    }
    const post = await response.json();
    router.refresh();
    router.push(`/editor/${post.id}`);
  };
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant }), className, {
        "cursor-not-allowed opacity-60": isLoading,
      })}
      onClick={handleCreate}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <Icon.add className="mr-2 h-4 w-4" />
      )}
      新しい投稿
    </button>
  );
}
