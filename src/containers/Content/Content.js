import React from "react";
import Information from "./components/Information";
import General from "./components/General";
import Special from "./components/Special";

const Content = () => (
  <div className="content">
    <General/>
    <Special/>
    <Information/>
  </div>
);

export default Content;
