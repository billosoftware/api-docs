import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface BilloIconProps {
  iconOnly?: boolean;
  className?: string;
  shortName?: boolean;
}

export default function BilloIcon({ iconOnly, shortName, className }: BilloIconProps) {
  if (iconOnly) {
    return (
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image src="/img/billo-media/icon-color.svg" alt="Billo Icon" width={128} height={128} className={cn("aspect-square rounded-md object-cover", className)} />
      </Link>
    );
  }
  return (
    <Link href="https://billoinvoicing.com" className="flex flex-row items-center gap-2">
      <div className="text-sidebar-primary-foreground flex aspect-square items-center justify-center rounded-md">
        <Image src="/img/billo-media/icon-color.svg" alt="Billo Icon" width={32} height={32} className="aspect-square rounded-md object-cover" />
      </div>
      <div className="mt-[2px] flex space-x-2 text-left text-sm leading-tight">
        <div className="flex flex-col gap-0">
          <h1 className="truncate text-lg font-bold">{shortName ? "Invoicing" : "Billo Invoicing"}</h1>
        </div>
      </div>
    </Link>
  );
}
