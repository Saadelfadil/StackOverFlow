import React from "react";

interface Props {
  filters: [
    {
      name: string;
      value: string;
    }
  ];
  otherClasses: string;
  containerClasses: string;
}

const Filter = ({ filters, otherClasses, containerClasses } : Props) => {
  return (
    <div className="">
      <div></div>
    </div>
  );
};

export default Filter;