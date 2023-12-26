import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";


const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
            src='/assets/icons/hamburger.svg'
            alt="Menu"
            width={36}
                    />
      </SheetTrigger>
      <SheetContent>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
