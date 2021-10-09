import React from "react";

const marked = require("marked");

const MDPreview = ({value}) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(value) }} />
  );
};

export default MDPreview;
