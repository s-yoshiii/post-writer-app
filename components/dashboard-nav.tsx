import { SideBarNav } from "@/types";
import Link from "next/link";
import { Icon as Icons } from "./icon";

interface DashboardNavProps {
  items: SideBarNav[];
}

export default function DashboardNav({ items }: DashboardNavProps) {
  if (!items.length) {
    return null;
  }
  return (
    <nav>
      {items.map((item, index) => {
        const Icon = Icons[(item.icon || "arrowRight") as keyof typeof Icons];
        return (
          <Link href={item.href!} key={index}>
            <span
              className={`flex items-center rounded-md px-3 py2 text-sm font-medium hover:bg-accent text-accent-foreground`}
            >
              <Icon className={"mr-2 h-4 w-4"} />
              {item.title}
            </span>
          </Link>
        );
      })}
      <div>DashboardNav</div>
    </nav>
  );
}
