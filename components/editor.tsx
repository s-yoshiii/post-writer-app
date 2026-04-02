"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import TextareaAutosize from "react-textarea-autosize";

export default function Editor() {
  return (
    <form>
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
            <span>保存</span>
          </button>
        </div>
        <div>
          <TextareaAutosize
            name=""
            id="title"
            autoFocus
            placeholder="Post Title"
            className="w-full resize-none outline-none overflow-hidden bg-transparent text-5xl focus:outline-none"
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
