import React from "react";
import FormElement from "./FormElement";

export default function FormElementsList(props) {
  const elements = [
    {
      id: 1,
      title: "input",
      component: "TextInput",
      icon: "fa fa-font",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 2,
      title: "select",
      component: "Select",
      icon: "fa fa-caret-square-o-down",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 3,
      title: "number",
      component: "Number",
      icon: "fa fa-plus",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 4,
      title: "date",
      component: "Date",
      icon: "fa fa-calendar",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 5,
      title: "image",
      component: "Image",
      icon: "fa fa-image",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 6,
      title: "text area",
      component: "TextArea",
      icon: "fa fa-text-height",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 7,
      title: "line break",
      component: "Hr",
      icon: "fa fa-arrows-h",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 8,
      title: "H1",
      component: "H1",
      icon: "fas fa-heading",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 9,
      title: "H2",
      component: "H2",
      icon: "fas fa-heading",
      label: "",
      placeholder: "",
      info: "",
      name: "",
      class: "",
      width: "12"
    },
    {
      id: 10,
      label: "",
      title: "H3",
      component: "H3",
      icon: "fas fa-heading",
      width: "12"
    }
  ];

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
