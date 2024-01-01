import React from "react";

const RightSidebar = () => {
    const hotQuetions = [
      { _id: 1, title: "How do I use express as a custom server in Next.js?" },
      { _id: 2, title: "Cascading Deletes in SQLAlchemy?" },
      { _id: 3, title: "How to Perfectly Center a Div with Tailwind CSS?" },
      { _id: 3, title: "Best Practices for data fetching in a Next.js application with Server-Side Rendering ( SSR )?" },
      { _id: 3, title: "Redux" },
    ];
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 max-xl:hidden w-[350px] dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">

        </div>
      </div>
      <div className="mt-16">
        
      </div>
    </section>
  );
};

export default RightSidebar;
