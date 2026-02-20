import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import Link from "next/link";

interface Props {
  items: NavItem[];
}

export default function MobileNav({ items }: Props) {
  return (
    <div className="fixed left-0 right-0 inset-0 top-16 z-50 p-6 md:hidden animate-in slide-in-from-top-16">
      <div className="grid gap-6 bg-popover p-4 text-popover-foreground shadow-md">
        <Link href={"/"} className="font-bold">
          {siteConfig.name}
        </Link>
        <nav className="text-sm">
          {items.map((item, i) => (
            <Link key={i} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
