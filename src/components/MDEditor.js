import React from "react";

const MDEditor = (props) => {
  const fnOnChange = (evt) => {
    props.onInput(evt);
  };
  return (
    <div id="editorWrapper">
      <textarea id="editor" onChange={fnOnChange} resize="false">
        {props.value}
      </textarea>
    </div>
  );
};

export default MDEditor;
