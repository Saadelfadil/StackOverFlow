"use client";

import React, { createContext, useState, useEffect, useContext} from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children } : {children : React.ReactNode}) {
    const [mode, setMode] = useState("light");
}