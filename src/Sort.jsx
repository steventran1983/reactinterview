import React from "react";

export const Sort = ({ data }) => {
  const sortData = data.sort();
  return (
    <div>
      {sortData.map((number, index) => (
        <span key={index}> {number}</span>
      ))}
    </div>
  );
};
