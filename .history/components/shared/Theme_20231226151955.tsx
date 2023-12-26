import React from "react";
import { useTheme } from "@/context/ThemProvider";

const Theme = () => {
    const {mode, setMode] = useTheme();
  return (
    <div>Theme</div>
  )
};

export default Theme;
