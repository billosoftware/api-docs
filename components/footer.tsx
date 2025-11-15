import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { CommandIcon, FavouriteIcon, NewTwitterIcon, Triangle01Icon } from "@hugeicons/core-free-icons";

export function Footer() {
  return (
    <footer className="border-t w-full sm:h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <HugeiconsIcon icon={CommandIcon} className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            Built by{" "}
            <Link className="px-1 underline underline-offset-2" href="https://ldo.dev">
              v0sudo
            </Link>
            .
          </p>
          <p className="text-center">
            The source code is available on{" "}
            <Link className="px-1 underline underline-offset-2" href="https://github.com/billosoftware/api-docs">
              GitHub
            </Link>
            .
          </p>
          <p className="text-center flex">
            Follow me on{" "}
            <Link className="px-1 underline underline-offset-2 flex items-center gap-2" href="https://x.com/v0sudo">
              <HugeiconsIcon icon={NewTwitterIcon} className="w-4 h-4 font-extrabold" /> v0sudo
            </Link>
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link href="https://vercel.com/templates/next.js/documentation-template" className={buttonVariants({ variant: "outline", size: "sm" })}>
        <HugeiconsIcon icon={Triangle01Icon} className="h-4 w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link href="https://github.com/sponsors/v0sudo" className={buttonVariants({ variant: "outline", size: "sm" })}>
        <HugeiconsIcon icon={FavouriteIcon} className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
