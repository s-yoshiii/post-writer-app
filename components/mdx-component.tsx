/* eslint-disable react-hooks/static-components */
"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Callout from "./callout";

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  const component = {
    Image,
    Callout,
  };
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Component components={component} />
    </div>
  );
}
