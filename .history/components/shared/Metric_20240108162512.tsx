import Image from "next/image";
import React from "react";

interface MetricProps {
    imgUrl: string;
    alt: string;
    value: number | number;
    title: string;
    href?: string;
    textStyles?: string;
    isAuthor?: boolean;
}

const Metric = ({imgUrl, alt, value, title, href, textStyles, isAuthor} : MetricProps) => {
  return (
    <div className="flex-center flex-wrap gap-1">
        <Image
            src={}
        />
    </div>
  )
};

export default Metric;
