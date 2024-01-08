import Image from "next/image";
import React from "react";

const NoResult = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
        <Image
            src="/assets/images/light-illustration.png"
            alt="No result"
            width={270}
            height={200}
            className="block object-contain dark:hidden"
        />
        <Image
            src="/assets/images/dark-illustration.png"
            alt="No result"
            width={270}
            height={200}
            className="hidden object-contain dark:flex"
        />

        <p></p>

    </div>
  )
};

export default NoResult;
