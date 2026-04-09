"use client";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState, useRef } from "react";
import type { default as EditorJSType } from "@editorjs/editorjs";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import TextareaAutosize from "react-textarea-autosize";
import { Post } from "@/lib/generated/prisma";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postPatchSchema, postPatchSchemaType } from "@/lib/validations/post";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Icon } from "./icon";
interface EditorProps {
  post: Pick<Post, "id" | "title" | "published" | "content">;
}
export default function Editor({ post }: EditorProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const ref = useRef<EditorJSType | null>(null);
  const router = useRouter();
  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const EditorjsList = (await import("@editorjs/list")).default;
    const CodeTool = (await import("@editorjs/code")).default;
    const body = postPatchSchema.parse(post);
    const editor = new EditorJS({
      holder: "editor",
      onReady() {
        ref.current = editor;
      },
      placeholder: "ここに記事を書く",
      inlineToolbar: true,
      data: body.content,
      tools: {
        header: Header,
        LinkTool: LinkTool,
        List: EditorjsList,
        code: CodeTool,
      },
    });
  }, [post]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);
  useEffect(() => {
    if (isMounted) {
      initializeEditor();
    }
    return () => {
      ref.current?.destroy();
      ref.current = null;
    };
  }, [isMounted, initializeEditor]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postPatchSchemaType>({
    resolver: zodResolver(postPatchSchema),
  });
  const onSubmit = async (data: postPatchSchemaType) => {
    setIsSaving(true);
    const blocks = await ref.current?.save();
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
      }),
    });
    setIsSaving(false);
    if (!response.ok) {
      return toast.error("問題が発生しました。", {
        description:
          "あなたの記事は保存されませんでした。もう一度お試しください。",
      });
    }
    router.refresh();
    return toast.success("正常に保存されました。");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href={"/dashboard"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              戻る
            </Link>
            <p className="text-sm text-muted-foreground">公開</p>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            {isSaving && <Icon.spinner className="w-4 h-4 ml-6 animate-spin" />}
            <span>保存</span>
          </button>
        </div>
        <div className="w-[800px] mx-auto">
          <TextareaAutosize
            id="title"
            autoFocus
            defaultValue={post.title}
            placeholder="Post Title"
            className="w-full resize-none outline-none overflow-hidden bg-transparent text-5xl focus:outline-none"
            {...register("title")}
          ></TextareaAutosize>
        </div>
        <div id="editor" className="min-h-[500px] ">
          Editor
        </div>
        <p className="text-sm text-gray-500">
          Use
          <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
            Tab
          </kbd>
          to open the command menu.
        </p>
      </div>
    </form>
  );
}
