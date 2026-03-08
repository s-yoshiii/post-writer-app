"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";
import { signIn } from "next-auth/react";
import { useState } from "react";
export default function UserAuthForm() {
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="block" htmlFor="email">
              Your email address
            </Label>
            <Input type="email" id="email" placeholder="name@example.com" />
          </div>
          <button className={cn(buttonVariants())} type="submit">
            メールアドレスでログイン
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">
            または
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            setIsGithubLoading(true);
            signIn("github");
          }}
        >
          {isGithubLoading ? (
            <Icon.spinner className="animate-spin mr-1" />
          ) : (
            <Icon.github className="mr-1" />
          )}
          githubでログイン
        </button>
        <button
          className={cn(buttonVariants({ variant: "outline" }))}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google");
          }}
        >
          {isGoogleLoading ? (
            <Icon.spinner className="animate-spin mr-1" />
          ) : (
            <Icon.google className="mr-1" />
          )}
          Googleでログイン
        </button>
      </div>
    </div>
  );
}
