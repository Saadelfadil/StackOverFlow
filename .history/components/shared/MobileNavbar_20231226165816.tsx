import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="StackOverFlow"
          />
          <p className="h2-bold font-spaceGrotesk  text-dark100_light900">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>

        <div>
            <SheetClose asChild>
                <Nav
            </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;