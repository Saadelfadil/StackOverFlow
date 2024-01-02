import React from "react";

interface CustomInputProps {
    route: string;
    iconPosition: string;
    imgSrc: string;
    placeholder: string;
    otherClasses: string;
}

const LocalSearchbar = ({route, iconPosition, imgSrc, placeholder, otherClasses} : CustomInputProps) => {
  return (
    <div className="bckground-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${}">

    </div>
  )
};

export default LocalSearchbar;
