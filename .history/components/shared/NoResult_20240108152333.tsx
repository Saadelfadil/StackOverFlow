import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface Props {
    title: string;
    description: string;
    link: string;
    linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle} : Props) => {
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

      <h2 className="h2-bold text-dark500_light700 mt-8">
        {}
      </h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center ">
        Be the first to break the silence! Ask a Question and kickstart the
        discussion. our quert could be the next big thing others learn from. Get
        involved!
      </p>

      <Link href="/">
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3  text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
          Ask a Question
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
