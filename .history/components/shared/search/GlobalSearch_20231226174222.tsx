import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="max-lg-hidden relative w-full max-w-[600px] ">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ">
        <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search..."
          className="parag"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
