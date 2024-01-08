import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

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
    className="flex justify-between gap-7"
    >
        <Badge className="aub">

        </Badge>
    </Link>
  )
};

export default RenderTag;