"use client"
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import React from "react";

const HomeFilters = () => {
    const isActive = false;
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
        {HomePageFilters.map((item) => (
            <Button
                key={item.value}
                onClick={() => {}}
                className={`body-medium rounded-`}
            >
                {item.name}
            </Button>
        ))}
    </div>
)
};

export default HomeFilters;
