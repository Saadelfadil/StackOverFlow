import Image from "next/image";
import React from "react";

const NoResult = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
        <Image
            src="/assets/images/dark-ill.svg"
        />
    </div>
  )
};

export default NoResult;
