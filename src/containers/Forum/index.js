import React from "react";
import Forum from "./Forum";

const ForumContainer  = ({ className, id, themes }) => {

  return <Forum className={className} id={id} themes={themes}/>
};

export default ForumContainer;
