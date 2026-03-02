import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
export default function UserAuthForm() {
  return (
    <div>
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
    </div>
  );
}
