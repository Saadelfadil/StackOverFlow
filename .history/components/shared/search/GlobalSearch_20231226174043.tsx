import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="max-lg-hidden relative w-full max-w-[600px] ">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ">
        <Image
            src="/assets/icons/search.svg"
            alt="search"
            
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
