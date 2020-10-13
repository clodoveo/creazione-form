import React from "react";
import DraggableCol from "./DraggableCol";
import ColHeader from "./ColHeader";

export default function RightCol(props) {
  return (
    <DraggableCol handlerPosition="left" colWidth={props.colWidth}>
      <ColHeader title={props.title} />
      {props.children}
    </DraggableCol>
  );
}
