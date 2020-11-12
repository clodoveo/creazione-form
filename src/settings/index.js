import { getTables } from "../adapters/xmysql/tables";
import { getFields } from "../adapters/xmysql/fields";

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
    icon: "fa fa-font"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    dataSourceTable: "appartamento",
    dataSorceLabel: "ID",
    dataSorceValue: "ID",
    dataOption: "",
    info: "",
    width: "12",
    class: "",
    component: "Select2",
    icon: "fa fa-caret-square-o-down"
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
    icon: "fa fa-plus"
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
    icon: "fa fa-calendar"
  },
  {
    id: "",
    label: "",
    name: "",
    placeholder: "",
    info: "",
    width: "12",
    class: "",
    icon: "fa fa-image"
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
    icon: "fa fa-text-height"
  },
  {
    id: "",
    width: "12",
    class: "",
    component: "Hr",
    icon: "fa fa-arrows-h"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H1",
    icon: "fas fa-heading"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H2",
    icon: "fas fa-heading"
  },
  {
    id: "",
    label: "",
    width: "12",
    class: "",
    component: "H3",
    icon: "fas fa-heading"
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
  icon: "fa fa-font"
};

export { elements, defaultElement, getTables, getFields };
