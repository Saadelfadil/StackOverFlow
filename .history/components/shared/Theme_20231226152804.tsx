import React from "react";
import { useTheme } from "@/context/ThemProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";


const Theme = () => {
    const {mode, setMode} = useTheme();
  return (
    <div>Theme</div>
  )
};

export default Theme;
