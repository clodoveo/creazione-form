import { getTables } from "../adapters/graphql/tables";
import { getFields } from "../adapters/graphql/fields";

const elements = [
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "TextInput",
    icon: "fa fa-font",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "",
    dataSorceLabel: "",
    dataSorceValue: "",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "Select2",
    icon: "fa fa-caret-square-o-down",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "Number",
    icon: "fa fa-plus",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "Date",
    icon: "fa fa-calendar",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    icon: "fa fa-image",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "TextArea",
    icon: "fa fa-text-height",
    step: "1"
  },
  {
    id: "",
    width: "12",
    class: "",
    component: "Hr",
    icon: "fa fa-arrows-h",
    step: "1"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H1",
    icon: "fas fa-heading",
    step: "1"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H2",
    icon: "fas fa-heading",
    step: "1"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H3",
    icon: "fas fa-heading",
    step: "1"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "TabDelimiter",
    icon: "fas fa-align-justify",
    step: "1"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "BtnSave",
    icon: "fas fa-save",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "",
    dataSorceLabel: "",
    dataSorceValue: "",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "Checkbox",
    icon: "far fa-check-square",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "",
    dataSorceLabel: "",
    dataSorceValue: "",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "Radio",
    icon: "far fa-dot-circle",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "Hidden",
    icon: "fas fa-eye-slash",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    component: "Switch",
    icon: "fas fa-toggle-on",
    step: "1"
  },
  {
    html: "",

    width: "12",
    class: "",
    component: "Div",
    icon: " fab fa-html5",
    step: "1"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "",
    dataSorceLabel: "",
    dataSorceValue: "",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "FancyCb",
    icon: " fab fa-html5",
    step: "1"
  }
];

// you can define the shape of the element inserted when nothing specified(ex... bulk)
const defaultElement = {
  id: "",
  label: "",
  name: "",
  placeholder: "",
  info: "",
  width: "12",
  class: "",
  component: "TextInput",
  icon: "fa fa-font",
  step: "1"
};

export { elements, defaultElement, getTables, getFields };
