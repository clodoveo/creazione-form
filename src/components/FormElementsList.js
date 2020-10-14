import React from "react";
import FormElement from "./FormElement";

export default function FormElementsList(props) {
  const { elements } = props;

  const { setDraggedItem } = props;
  const { setSelectedItemsList } = props;
  const { setSelectedItem } = props;

  return elements.map((item) => (
    <FormElement
      key={item.id}
      item={item}
      setDraggedItem={setDraggedItem}
      setSelectedItemsList={setSelectedItemsList}
      setSelectedItem={setSelectedItem}
    />
  ));
}
