import React from "react";
import PageGenerator from "../../components/PageGenerator";
import otherOptions from "./options";

const PodcastHost = () => {
  return (
    <div>
      <PageGenerator data={otherOptions} />
    </div>
  );
};

export default PodcastHost;
