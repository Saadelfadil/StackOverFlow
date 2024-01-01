import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
      <Link href={"/ask-question"} className="">
      </Link>
      </div>
    </>
  );
}
