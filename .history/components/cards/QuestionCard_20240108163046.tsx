import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";

interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  anwsers: Array<Object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  anwsers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11 ">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {String(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* ADD EDIT DELETE IF SIGNED */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={upvotes}
          title=" Votes"
          textStyles="small-medium text-dark500_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={anwsers.length}
          title=" Anwsers"
          textStyles="small-medium text-dark500_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={anwsers.length}
          title=" Anwsers"
          textStyles="small-medium text-dark500_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;