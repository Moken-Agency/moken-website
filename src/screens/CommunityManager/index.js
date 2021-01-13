import React from "react";
import PageGenerator from "../../components/PageGenerator";
import otherOptions from "./options";

const CommunityManager = () => {
  return (
    <div>
      <PageGenerator data={otherOptions} />
    </div>
  );
};

export default CommunityManager;
