import React from "react";
import DraggableCol from "./DraggableCol";
import ColHeader from "./ColHeader";

export default function LeftCol(props) {
  const { setSelectedItemList } = props;
  return (
    <DraggableCol colWidth={props.colWidth} handlerPosition="right">
      <ColHeader title={props.title} />
      {props.children}
    </DraggableCol>
  );
}
