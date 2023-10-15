import React from "react";
import { useParams } from "react-router-dom";

function Class() {
  const { className } = useParams();
  return (
    <div>
      <p> Class: {className}</p>
    </div>
  );
}

export default Class;
