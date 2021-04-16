import React from "react";
import FormElement from "./FormElement";
import { uniqueId } from "lodash";

export default function FormElementsList(props) {
  const { elements } = props;

  const { setDraggedItem } = props;
  const { setSelectedItemsList } = props;
  const { setSelectedItem } = props;
  const { selectedItemsList } = props;
  const { activeStep } = props;

  return elements.map((item) => (
    <FormElement
      key={uniqueId("formelements")}
      item={item}
      setDraggedItem={setDraggedItem}
      setSelectedItemsList={setSelectedItemsList}
      setSelectedItem={setSelectedItem}
      activeStep={activeStep}
      selectedItemsList={selectedItemsList}
    />
  ));
}
