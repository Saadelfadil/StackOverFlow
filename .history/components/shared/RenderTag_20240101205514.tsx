import Link from "next/link";
import React from "react";

interface Props {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link
    href={`/tags/${_id}`}
    className="flex items-center justify-between gap-7"
    >
    </Link>
  )
};

export default RenderTag;
