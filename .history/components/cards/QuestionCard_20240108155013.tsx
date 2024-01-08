import React from "react";

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

const QuestionCard = ({_id, title, tags, author, upvotes, views, anwsers, createdAt} : QuestionProps) => {
  return (
    <div className="card-wrapper p-9 sm:px-11 rounded-[10px] ">
       <div className="flex ">

       </div>
       {title}
    </div>
  )
};

export default QuestionCard;
