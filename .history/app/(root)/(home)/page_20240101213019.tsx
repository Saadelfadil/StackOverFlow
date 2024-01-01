import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
      <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
        <Button className="primary-gradient min-h">

        </Button>
      </Link>
      </div>
    </>
  );
}
