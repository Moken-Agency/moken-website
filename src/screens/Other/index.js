import React from "react";
import PageGenerator from "../../components/PageGenerator";
import otherOptions from "./options";

const Other = () => {
  return (
    <div>
      <PageGenerator data={otherOptions} />
    </div>
  );
};

export default Other;
