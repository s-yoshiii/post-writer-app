import Link from "next/link";
export default function Login() {
  return (
    <div className="container flex flex-col justify-center items-center h-screen">
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            メールアドレスを入力してログインできます。
          </p>
        </div>
        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link href={"/register"} className="underline underline-offset-4">
            アカウントを持っていない方はこちら
          </Link>
        </p>
        {/* <UserAuthForm /> */}
      </div>
    </div>
  );
}
