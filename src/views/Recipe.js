import React from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { rid } = useParams();
  return <div>{rid}</div>;
};

export default Recipe;
