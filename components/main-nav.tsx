"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { useState } from "react";
interface Props {
  items?: NavItem[];
  children?: React.ReactNode;
}
export default function MainNav({ items }: Props) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <div className="flex items-center md:gap-10">
      <Link className="hidden md:flex items-center space-x-2" href={"/"}>
        <span className="font-bold hidden sm:inline-block">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className="md:hidden"
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
        }}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav />}
    </div>
  );
}
