import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuetions = [
  { _id: 1, title: "How do I use express as a custom server in Next.js?" },
  { _id: 2, title: "Cascading Deletes in SQLAlchemy?" },
  { _id: 3, title: "How to Perfectly Center a Div with Tailwind CSS?" },
  {
    _id: 4,
    title:
      "Best Practices for data fetching in a Next.js application with Server-Side Rendering ( SSR )?",
  },
  { _id: 5, title: "Redux Toolkit Not updating State as Expected" },
];

const popularTags = [
    {_id: 1, name: "javascript", totalQuestions: 5},
    {_id: 2, name: "react", totalQuestions: 5},
    {_id: 3, name: "next", totalQuestions: 5},
    {_id: 4, name: "vue", totalQuestions: 5},
    {_id: 5, name: "redux", totalQuestions: 5},
]

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuetions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>

              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          <RenderTag />
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
