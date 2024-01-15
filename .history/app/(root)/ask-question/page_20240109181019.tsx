import Question from "@/components/forms/Question";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const Page = () => {
  const { userId } = auth();

  if (!userId)
  {
    redirect
  }
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question />
      </div>
    </div>
  )
};

export default Page;
