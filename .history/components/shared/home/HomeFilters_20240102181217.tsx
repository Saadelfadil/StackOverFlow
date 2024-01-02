"use client"
import { HomePageFilters } from "@/constants/filters";
import React from "react";

const HomeFilters = () => {
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
        {HomePageFilters.map((item) => ()}}
    </div>
)
};

export default HomeFilters;
