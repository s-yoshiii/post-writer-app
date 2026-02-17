import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32">
        <div className="container mx-auto flex text-center flex-col items-center">
            <Link href={"/"}>Xをフォローする</Link>
            <h1>Post Writer</h1>
            <p>Post Writerは、Next.js App Routerを使用して作成されたアプリで、学習用です。</p>
        </div>
      </section>
    </>
  );
}