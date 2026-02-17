import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32">
        <div className="container mx-auto flex text-center flex-col items-center gap-4">
          <Link
            href={siteConfig.links.x}
            target="_blank"
            rel="noreferrer"
            className="bg-muted px-4 py-1.5 text-muted-foreground hover:bg-muted/80 hover:text-muted-foreground/80 rounded-md text-sm font-medium transition-all duration-300"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-normal md:text-xl lg:text-2xl">
            Post Writerは、Next.js App
            Routerを使用して作成されたアプリで、学習用です。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Github
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
