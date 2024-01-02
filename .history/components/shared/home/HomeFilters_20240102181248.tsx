"use client"
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import React from "react";

const HomeFilters = () => {
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
        {HomePageFilters.map((item) => (
            <Button
                key={item.value}
                className="secondary-gradient min-h-[46px] px-4 py-3 !text-light-900"
            />
        ))}
    </div>
)
};

export default HomeFilters;
