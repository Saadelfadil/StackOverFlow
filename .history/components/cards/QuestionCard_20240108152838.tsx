import React from "react";

interface QuestionProps {
    _id: string;
    title: string;
    tags: {
        _id: string;
        name: string;
    }[];
    
}

const QuestionCard = ({_id, title, tags, author, upvotes, views, anwsers, createdAt} : QuestionProps) => {
  return <div>QuestionCard</div>;
};

export default QuestionCard;