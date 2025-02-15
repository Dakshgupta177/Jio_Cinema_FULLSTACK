import React from "react";

const video = ({params}) => {
  console.log(params);
  return <div>{params.id}</div>;
};

export default video;
