import React from "react";

export default function BtnSave(props) {
  const { item } = props;

  const { width } = props;

  let className = item.width !== "" ? "col-md-" + item.width : "col-md-12";

  if (width === "full") {
    className = "";
  }

  return (
    <div className={className} style={{ maxHeight: "125px" }}>
      <fieldset>
        <legend>{item.label}</legend>
        <div dangerouslySetInnerHTML={{ __html: item.html }} />
        {props.children}
      </fieldset>
    </div>
  );
}
