import React from "react";

interface Props {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount?: number;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return <div>RenderTag</div>;
};

export default RenderTag;
