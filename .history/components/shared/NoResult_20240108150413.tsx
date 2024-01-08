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

        <h2>There's no question to show</h2>
        <p>Be the first to break the silence! Ask a Question and kickstart the discussion. our quert could be the next big thing others</p>

    </div>
  )
};

export default NoResult;
